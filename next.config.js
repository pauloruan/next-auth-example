/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
