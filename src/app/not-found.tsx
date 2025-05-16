'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFound');
    const router = useRouter();
    useEffect(() => {
        const timeout = setTimeout(() => router.back(), 3000);
        return () => clearTimeout(timeout);
    }, [router]);
    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-2xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                    {t('TextTitle')}
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    {t('TextParagraf')}
                </p>
            </div>
        </main>
    );
}