import { useTranslations } from 'next-intl';
import { HeroImage } from '@/components/hero/hero-image';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { FeatureCard } from '@/components/features/feature-card';
import React from 'react';
import { GiQuickSlash } from 'react-icons/gi';
import { IoMdHand } from 'react-icons/io';

export function Features() {
  const aboutTranslations = useTranslations('About');
  const featuresTranslations = useTranslations('Features');
  return (
    <section id={'features'} className={'overflow-hidden sm:py-16'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col px-6 mt-20`}>
          <h1 className="text-3xl tracking-tight">{aboutTranslations('why_title')}</h1>
          <p className="mt-6 text-lg text-gray-600">{aboutTranslations('why_content')}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-20 place-items-center">
          <div className='md:col-span-5 lg:mt-0 xl:col-span-6 flex justify-center'>
            <img src={'./main.svg'} className={'w-3/4'}/>
          </div>
          <div className="z-10 mx-auto max-w-2xl md:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <FeatureCard title={featuresTranslations('f1_title')} content={featuresTranslations('f1_content')} icon={
              <IoCloudDoneOutline className={'text-4xl mr-8'} />
            } />
            <FeatureCard title={featuresTranslations('f2_title')} content={featuresTranslations('f2_content')} icon={
              <GiQuickSlash className={'text-4xl mr-8'} />
            } />
            <FeatureCard title={featuresTranslations('f3_title')} content={featuresTranslations('f3_content')} icon={
              <IoMdHand className={'text-4xl mr-8'} />
            } />
          </div>
        </div>
      </div>
    </section>
  )
}