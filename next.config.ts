import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.public.blob.vercel-storage.com',
                pathname: '/profile/**',
            },
            {
                protocol: 'https',
                hostname: '**.public.blob.vercel-storage.com',
                pathname: '/logo/**',
            },
        ],
    },
}
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);