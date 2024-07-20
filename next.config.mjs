/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    base_URL: `http://localhost:8080/`,
  },
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
   }
};

export default nextConfig;
