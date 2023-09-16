import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import { Features } from '@/components/features/features';

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <Hero></Hero>
        <About></About>
        <Features></Features>
      </main>
    </>
  )
}