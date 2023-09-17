"use client";
import { Button, Navbar as FBNavbar } from 'flowbite-react';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const titleTranslations = useTranslations('Titles')
  return (
    <FBNavbar
      fluid
      rounded
      className={'bg-gray-50 p-3 sticky top-0 z-50'}

    >
      <FBNavbar.Brand href="https://josegregorio.lat">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-9"
          src="/logo.png"
        />
        <span className="ml-2 font-semibold text-lg tracking-tight text-gray-800 hidden lg:inline-flex">AI José Gregorio</span>
      </FBNavbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button outline={true} color={'dark'} size={'sm'} className={'font-semibold'}>
          {titleTranslations('tryOnWeb')}
        </Button>
        <Button color={`dark`} size={'sm'} className={'font-semibold'}>
          {titleTranslations('download')}
        </Button>
        <FBNavbar.Toggle />
      </div>
      <FBNavbar.Collapse>
        <FBNavbar.Link color={'dark'}
          href="#about"
        >
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('about')}
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#features">
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('features')}
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#faqs" color={'dark'}>
          <p className={'hover:text-black font-semibold'}>
            {titleTranslations('faqs')}
          </p>
        </FBNavbar.Link>
      </FBNavbar.Collapse>
    </FBNavbar>
  )
}