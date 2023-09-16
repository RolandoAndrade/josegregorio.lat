import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <Hero></Hero>
        <About></About>
      </main>
    </>
  )
}