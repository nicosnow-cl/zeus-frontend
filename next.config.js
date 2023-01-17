const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const path = require('path');

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  swcMinify: true,
  images: {
    domains: [
      'cdn-ea-images.escort-advisor.com',
      'picsum.photos',
      'pornstarbyface.com',
      's3.eu-central-1.amazonaws.com',
      'st2n.depositphotos.com',
      'st3.depositphotos.com',
      'st3n.depositphotos.com',
      'st4n.depositphotos.com',
      'www.peacemakersnetwork.org',
      'www.shutterstock.com',
    ],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withPlugins([bundleAnalyzer], nextConfig);
