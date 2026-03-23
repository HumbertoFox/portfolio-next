import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const blobVercel = '0wym5snkkgilphca.public.blob.vercel-storage.com';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: blobVercel,
                pathname: '/profile/**',
            },
            {
                protocol: 'https',
                hostname: blobVercel,
                pathname: '/logo/**',
            },
            {
                protocol: 'https',
                hostname: blobVercel,
                pathname: '/projects/**',
            },
        ],
    },
}
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);