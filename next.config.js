const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    rootDir: __dirname,
  },
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
    // @ts-ignore - rules is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

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

module.exports = withNextIntl(nextConfig);
