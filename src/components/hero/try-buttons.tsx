"use client";
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { FaGooglePlay } from 'react-icons/fa6';
import { TfiWorld } from 'react-icons/tfi';

export function TryButtons() {
  const titleTranslations = useTranslations('Titles')
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start">
      <Button href={'https://app.josegregorio.lat'} outline={true} color={'dark'} size={'lg'} className={'font-semibold'}>
        <div className={'flex place-items-center'}>
          <TfiWorld className={'mr-3'}/>
          {titleTranslations('tryOnWeb')}
        </div>

      </Button>
      <Button href={'https://play.google.com/store/apps/details?id=com.rolandoandrade.djghapp'} color={'dark'} size={'lg'} className={'font-semibold'}>
        <div className={'flex place-items-center'}>
          <FaGooglePlay className={'mr-3'}/>
          {titleTranslations('download')}
        </div>
      </Button>
    </div>
  )
}