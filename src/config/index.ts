const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL,
};

Object.entries(config).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`missing required ${key} env variable`);
  }
});

export default config;
