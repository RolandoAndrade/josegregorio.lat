import '../../app/[locale]/globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { AsyncLayout } from '@/app/[locale]/async-layout';

const inter = Inter({ subsets: ['latin'] })

import {getTranslator} from 'next-intl/server';

type MetadataProps = {
  params: {
    locale: string
  }
}

export async function generateMetadata({params: {locale}}: MetadataProps) {
  const t = await getTranslator(locale, 'Metadata');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
      images: '/logo.png',
    },
  };
}



export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Record<string, string>
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    // redirect to default
    notFound()
  }



  return (
    <html lang={locale} className={'scroll-smooth'}>
      <body className={inter.className}>
        <AsyncLayout locale={locale}>
          {children}
        </AsyncLayout>
      </body>
    </html>
  )
}
