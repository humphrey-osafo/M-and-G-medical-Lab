/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: false,
  },
  // Disable Turbopack for production build to avoid issues
  experimental: {
    turbo: {
      resolveAlias: {
        conditions: ["source"]
      }
    }
  }
}

module.exports = nextConfig