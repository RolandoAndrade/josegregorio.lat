"use client";
import { Button, Navbar as FBNavbar } from 'flowbite-react';

export function Navbar() {
  return (
    <FBNavbar
      fluid
      rounded
      className={'bg-transparent p-3 sticky top-0 z-50'}

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
          Try on Web
        </Button>
        <Button color={`dark`} size={'sm'} className={'font-semibold'}>
          Download
        </Button>
        <FBNavbar.Toggle />
      </div>
      <FBNavbar.Collapse>
        <FBNavbar.Link color={'dark'}
          href="#"
        >
          <p className={'hover:text-black font-semibold'}>
            About
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#">
          <p className={'hover:text-black font-semibold'}>
            Features
          </p>
        </FBNavbar.Link>
        <FBNavbar.Link href="#" color={'dark'}>
          <p className={'hover:text-black font-semibold'}>
            FAQs
          </p>
        </FBNavbar.Link>
      </FBNavbar.Collapse>
    </FBNavbar>
  )
}