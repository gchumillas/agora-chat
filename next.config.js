module.exports = {
  env: {
    API_URL: process.env.API_URL,
    AGORA_APP_ID: process.env.AGORA_APP_ID,
    AGORA_CHANNEL: process.env.AGORA_CHANNEL
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
    }

    return config;
  }
};