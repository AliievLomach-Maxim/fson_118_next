import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://picsum.photos/200/300')],
    // remotePatterns: [
    //   {
    //     hostname: 'picsum.photos',
    //   },
    // ],
  },
}

export default nextConfig
