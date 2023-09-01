/* eslint @typescript-eslint/no-var-requires: off */
const nextMdx = require('@next/mdx');
const remarkPrism = require('remark-prism');

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkPrism],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/ol-gsi-vt',
  pageExtensions: ['tsx', 'mdx'],
};

module.exports = withMdx(nextConfig);
