import { Button } from 'flowbite-react';
import { TryButtons } from '@/components/hero/try-buttons';
import { HeroImage } from '@/components/hero/hero-image';

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">Your assistant in health matters</h1>
            <p className="mt-6 text-lg text-gray-600">This AI-powered medical assistant was created to provide much-needed assistance to Venezuelans who are struggling to access medical care during this turbulent time.</p>
             <TryButtons />
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  )
}
