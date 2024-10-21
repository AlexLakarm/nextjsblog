/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.routard.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
