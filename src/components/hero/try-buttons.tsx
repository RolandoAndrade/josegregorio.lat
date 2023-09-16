"use client";
import { Button } from 'flowbite-react';

export function TryButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
      <Button outline={true} color={'dark'} size={'lg'} className={'font-semibold'}>
        Try on Web
      </Button>
      <Button color={'dark'} size={'lg'} className={'font-semibold'}>
        Download
      </Button>
    </div>
  )
}