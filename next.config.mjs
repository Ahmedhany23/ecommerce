/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    base_URL: `https://ecommerce-backend-production-fdab.up.railway.app/`,
    admin_email:  'admin@admin.com',
    admin_password: "admin123456",
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
