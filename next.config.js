/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos", "i.ibb.co", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
