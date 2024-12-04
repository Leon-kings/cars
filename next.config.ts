/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pikbest.com'],
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ], // Add the hostname here
  },
};

module.exports = nextConfig;

