/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "i.ibb.co", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
