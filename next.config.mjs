/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  trailingSlash: true,
  output: 'export',
  distDir: 'build',
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX
};

export default nextConfig;
