const path = require('path')
const withNextIntl = require('next-intl/plugin')('./intl/i18n.tsx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    rootDir: __dirname,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
    {
      source: '/es',
      destination: '/es/home',
      permanent: true,
    },
    {
      source: '/en',
      destination: '/en/home',
      permanent: true,
    },
  ],
  webpack(config, { dev, isServer }) {
    // @ts-ignore - rules is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

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
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-ea-images.escort-advisor.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.sexvid.xxx',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'pornstarbyface.com',
      },
      {
        protocol: 'https',
        hostname: 's3.eu-central-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'st2n.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'st3.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'st3n.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'st4n.depositphotos.com',
      },
      {
        protocol: 'https',
        hostname: 'www.peacemakersnetwork.org',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
