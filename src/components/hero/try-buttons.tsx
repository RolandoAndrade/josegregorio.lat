"use client";
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';

export function TryButtons() {
  const titleTranslations = useTranslations('Titles')
  return (
    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
      <Button outline={true} color={'dark'} size={'lg'} className={'font-semibold'}>
        {titleTranslations('tryOnWeb')}
      </Button>
      <Button color={'dark'} size={'lg'} className={'font-semibold'}>
        Download
      </Button>
    </div>
  )
}