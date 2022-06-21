/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "i.ibb.co", "res.cloudinary.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://api.yelp.com/v3/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
