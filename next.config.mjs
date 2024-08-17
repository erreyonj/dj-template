/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: 'https',
        hostname: 'thumbnailer.mixcloud.com',
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
