import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/navbar/navbar';

type AsyncLayoutProps = {
  locale: string;
  children: React.ReactNode;
}

export async function AsyncLayout({locale, children}: AsyncLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar></Navbar>
      {children}
    </NextIntlClientProvider>
  )
}
