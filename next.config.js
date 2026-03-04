/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow unoptimized for placeholder SVG images during template phase
    unoptimized: true,
  },
}

module.exports = nextConfig
