import Image from 'next/image'
import { Button } from 'flowbite-react';
import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <main className="flex-auto">
      <Hero></Hero>
    </main>
  )
}
