/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    newNextLinkBehavior: false,
  },
  output: "standalone",
  publicRuntimeConfig: {
    // remove private variables from processEnv
    processEnv: Object.fromEntries(
      Object.entries(process.env).filter(([key]) =>
        key.includes("NEXT_PUBLIC_")
      )
    ),
  },
  compiler: {
    // remove console.log from production environment
    removeConsole: process.env.NODE_ENV === "production",
  },
  transpilePackages: ["@venuedevops/venue-theme", "@backstage/theme"],
};

module.exports = nextConfig;
