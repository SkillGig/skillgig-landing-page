#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import mime from "mime-types";
import spawn from "cross-spawn";
import inquirer from "inquirer";
import fs from "fs";
import Mustache from "mustache";

// ES modules equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createFileFromTemplate = (templatePath, outputPath, config) => {
  const output = Mustache.render(
    fs.readFileSync(templatePath, { encoding: "utf8" }),
    config
  );
  fs.writeFileSync(outputPath, output);
};

const deployProject = async (projectConfig) => {
  try {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), "./.userconfig")
    );
    const userConfig = JSON.parse(data);
    const s3Client = new S3Client({
      region: projectConfig.awsRegion || "ap-south-1",
      endpoint: `https://s3.${
        projectConfig.awsRegion || "ap-south-1"
      }.amazonaws.com`, // Explicitly setting endpoint
      credentials: {
        accessKeyId: userConfig.awsAccessKey,
        secretAccessKey: userConfig.awsSecretKey,
      },
    });

    // TODO: Directory for each environment
    let s3Directory = "";
    switch (process.env.NODE_ENV) {
      case "uat":
        s3Directory = ""; // Example: uat-directory
        break;
      case "staging":
        s3Directory = ""; // Example: stage-directory
        break;
      default:
        s3Directory = ""; // Example: production-directory
    }

    if (projectConfig.hostingType === "s3") {
      // First, ensure the build exists
      const distPath = path.join(process.cwd(), "dist");
      if (!fs.existsSync(distPath)) {
        console.log("No build found. Running build first...");
        const buildResult = spawn.sync("yarn", ["build"], { stdio: "inherit" });
        if (buildResult.status !== 0) {
          console.log("Build failed. Please fix the errors and try again.");
          process.exit(1);
        }
      }

      // Upload to s3
      console.log(`🕓 Uploading project to S3: ${projectConfig.projectName}`);

      // Read the files - using a recursive method for Vite's dist directory
      const getAllFiles = (dirPath, arrayOfFiles = []) => {
        const files = fs.readdirSync(dirPath);
        files.forEach((file) => {
          const filePath = path.join(dirPath, file);
          if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
          } else {
            arrayOfFiles.push(filePath);
          }
        });
        return arrayOfFiles;
      };

      const distFiles = getAllFiles(distPath);
      let uploadCount = 0;
      const fileCount = distFiles.length;

      if (fileCount === 0) {
        console.log("No files found in dist directory");
        process.exit(1);
      }

      for (const filePath of distFiles) {
        try {
          const relativePath = path
            .relative(distPath, filePath)
            .replace(/\\/g, "/");
          const fileData = await fs.promises.readFile(filePath);
          const contentType = filePath.endsWith(".html")
            ? "text/html"
            : mime.lookup(filePath) || "application/octet-stream";

          const command = new PutObjectCommand({
            Bucket: "", // TODO: Replace with bucket name
            Key: `${projectConfig.projectName}/${relativePath}`,
            Body: fileData,
            ContentType: contentType,
            CacheControl: relativePath.includes("assets/")
              ? "max-age=31536000"
              : "no-cache",
          });

          await s3Client.send(command);
          uploadCount++;
          console.log(`✅ File uploaded - ${relativePath}`);

          if (uploadCount === fileCount) {
            console.log("✅ Deployment Complete!");
            console.log(
              `🌎 Your site is available at: https://${s3Directory}.s3.amazonaws.com/${projectConfig.projectName}/index.html`
            );
          }
        } catch (err) {
          console.log(`Error uploading file ${filePath}`);
          console.error(err);
          process.exit(1);
        }
      }
    }
  } catch (err) {
    console.error("An error occurred:", err);
    process.exit(1);
  }
};

// Read the appropriate config file based on environment
try {
  const configPath = path.join(process.cwd(), "./projectconfig");

  const data = await fs.promises.readFile(configPath);
  const projectConfig = JSON.parse(data);

  try {
    await fs.promises.access(path.join(process.cwd(), "./.userconfig"));
    await deployProject(projectConfig);
  } catch (err) {
    // User config file not found. Set it up
    console.log("No .userconfig file found");
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your AWS Access Key",
        name: "awsAccessKey",
        validate: (answer) => {
          if (answer.trim() === "") {
            return "Please enter a valid name";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Please enter your AWS Secret Key",
        name: "awsSecretKey",
        validate: (answer) => {
          if (answer.trim() === "") {
            return "Please enter a valid name";
          }
          return true;
        },
      },
    ]);

    const config = {
      awsAccessKey: answers.awsAccessKey,
      awsSecretKey: answers.awsSecretKey,
    };

    createFileFromTemplate(
      path.join(__dirname, "./.userconfig"),
      path.join(process.cwd(), "./.userconfig"),
      config
    );

    await deployProject(projectConfig);
  }
} catch (err) {
  console.error("An error occurred reading projectconfig file:", err);
  process.exit(1);
}
