import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import { Features } from '@/components/features/features';
import { Faqs } from '@/components/faqs/faqs';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <Hero></Hero>
        <About></About>
        <Features></Features>
        <Faqs></Faqs>
        <Footer></Footer>
      </main>
    </>
  )
}