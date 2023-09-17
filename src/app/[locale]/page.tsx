import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import { Features } from '@/components/features/features';
import { Faqs } from '@/components/faqs/faqs';

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <Hero></Hero>
        <About></About>
        <Features></Features>
        <Faqs></Faqs>
      </main>
    </>
  )
}