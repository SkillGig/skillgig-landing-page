// ENV based config

const config = {
  development: {
    apiUrl: "http://localhost:4001",
  },
  staging: {
    apiUrl: "",
  },
  uat: {
    apiUrl: "",
  },
  production: {
    apiUrl: "",
  },
};

export default config[import.meta.env.VITE_APP_ENV];
