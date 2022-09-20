const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/ol-vt-styles',
  pageExtensions: ['tsx', 'mdx'],
};

module.exports = withMdx(nextConfig);
