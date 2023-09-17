'use client';

import { Footer as FBFooter } from 'flowbite-react';
import { TryButtons } from '@/components/hero/try-buttons';
import { useTranslations } from 'next-intl';

export function Footer() {
  const titleTranslations = useTranslations('Titles')
  return (
    <FBFooter container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FBFooter.Brand
            alt="AI José Gregorio Logo"
            href="https://josegregorio.lat"
            name="AI José Gregorio"
            src="/logo.png"
          />
          <FBFooter.LinkGroup className={'place-items-center justify-center'}>
            <FBFooter.Link href="#about" className={'p-2'}>
              {titleTranslations('about')}
            </FBFooter.Link>
            <FBFooter.Link href="#features" className={'p-2'}>
              {titleTranslations('features')}
            </FBFooter.Link>
            <FBFooter.Link href="#faqs" className={'p-2'}>
              {titleTranslations('faqs')}
            </FBFooter.Link>
            <FBFooter.Link href="https://projects.rolandoandrade.me/doctor-app/" className={'p-2'}>
              {titleTranslations('privacy')}
            </FBFooter.Link>
            <div className={'p-2'}>
              <TryButtons />
            </div>
          </FBFooter.LinkGroup>
        </div>
        <FBFooter.Divider />
        <FBFooter.Copyright
          by="Rolando Andrade"
          href="https://rolandoandrade.me"
          year={2023}
        />
      </div>
    </FBFooter>
  )
}