"use client";
import { Button, Navbar as FBNavbar } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSection } from '@/components/navbar/section-hook';



const activeTheme = {
  active: {
    on: 'text-black',
    off: 'text-gray-600'
  }
}

export function Navbar() {
  const titleTranslations = useTranslations('Titles')
  const {currentSection} = useSection()

  return (
    <FBNavbar
      fluid
      rounded
      className={'bg-gray-50 p-3 sticky top-0 z-50'}
    >
      <FBNavbar.Brand href="/">
        <Image
          width={36}
          height={36}
          alt="AI José Gregorio Logo"
          className="mr-3 h-9"
          src="/logo.png"
          loading={'eager'}
        />
        <span className="ml-2 font-semibold text-lg tracking-tight text-gray-800 hidden lg:inline-flex">AI José Gregorio</span>
      </FBNavbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button outline={true} color={'dark'} size={'sm'} className={'font-semibold'} href={'https://app.josegregorio.lat'}>
          {titleTranslations('tryOnWeb')}
        </Button>
        <Button color={`dark`} size={'sm'} className={'font-semibold'} href={'https://play.google.com/store/apps/details?id=com.rolandoandrade.djghapp'}>
          {titleTranslations('download')}
        </Button>
        <FBNavbar.Toggle />
      </div>
      <FBNavbar.Collapse>
        <FBNavbar.Link color={'dark'} active={currentSection === 'about'}
          href="#about" theme={activeTheme}
        >
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('about')}
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#features" active={currentSection === 'features'} theme={activeTheme}>
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('features')}
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#faqs" color={'dark'} active={currentSection === 'faqs'} theme={activeTheme}>
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('faqs')}
          </p>
        </FBNavbar.Link>
      </FBNavbar.Collapse>
    </FBNavbar>
  )
}