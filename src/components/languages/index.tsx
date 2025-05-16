'use client';

import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguageToggleComponent() {
    const [locale, setLocale] = useState<string>();
    const router = useRouter();
    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        document.cookie = `portfolioLocale=${newLocale};`;
        router.refresh();
    }
    useEffect(() => {
        const coockieLocale = document.cookie
            .split('; ')
            .find((row) => row.startsWith('portfolioLocale='))
            ?.split('=')[1];
        if (coockieLocale) {
            setLocale(coockieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `portfolioLocale=${browserLocale};`;
            router.refresh();
        }
    }, [router]);
    return (
        <div className="space-x-2">
            <Button type="button" title="Pt" onClick={() => changeLocale('pt')} disabled={locale === 'pt'} className="text-xs h-5">
                <Languages className="size-3" />
                Pt
            </Button>
            <Button type="button" title="En" onClick={() => changeLocale('en')} disabled={locale === 'en'} className="text-xs h-5">
                <Languages className="size-3" />
                En
            </Button>
        </div>
    );
}