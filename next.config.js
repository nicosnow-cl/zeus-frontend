const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 's3.eu-central-1.amazonaws.com', 'cdn-ea-images.escort-advisor.com', 'www.shutterstock.com', 'www.peacemakersnetwork.org'],
  },
  serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
};

module.exports = nextConfig;
