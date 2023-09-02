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
  output: "export",
  reactStrictMode: true,
  basePath: "/ol-gsi-vt",
  pageExtensions: ["tsx", "mdx"],
  images: {
    unoptimized: true,
  },
};

module.exports = withMdx(nextConfig);
