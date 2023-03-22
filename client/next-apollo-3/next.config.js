/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // rewrites: [{ source: '/api/:path*', destination: '/:path*' }],
};

module.exports = nextConfig;
