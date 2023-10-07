// const nextTranslate = require('next-translate-plugin');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // serverRuntimeConfig: {
  //   PROJECT_ROOT: __dirname,
  // },
  images: {
    domains: [
      'cdn-ea-images.escort-advisor.com',
      'cdn1.sexvid.xxx',
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
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};

// module.exports = nextTranslate(nextConfig);
module.exports = withNextIntl(nextConfig);
