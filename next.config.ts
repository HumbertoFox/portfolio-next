import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '0wym5snkkgilphca.public.blob.vercel-storage.com',
                pathname: '/profile/**',
            },
            {
                protocol: 'https',
                hostname: '0wym5snkkgilphca.public.blob.vercel-storage.com',
                pathname: '/logo/**',
            },
            {
                protocol: 'https',
                hostname: '0wym5snkkgilphca.public.blob.vercel-storage.com',
                pathname: '/projects/**',
            },
        ],
    },
}
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);