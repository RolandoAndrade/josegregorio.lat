import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function About() {
  const aboutTranslations = useTranslations('About')
  return (
    <section id={'about'} className={'overflow-hidden py-20 sm:py-32 bg-black'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex place-items-center flex-col md:flex-row px-6`}>
          <Image width={250} height={250} alt={'AI José Gregorio logo'} src={'/logo.png'} className={'w-1/2 sm:w-1/3 md:w-[12rem] lg:w-1/4 max-w-[250px] md:mr-14'} />
          <div className={'mt-8'}>
            <h1 className="text-3xl font-medium tracking-tight text-white">{aboutTranslations('what_title')}</h1>
            <p className="mt-6 text-lg text-gray-300">{aboutTranslations('what_content')}</p>
          </div>
        </div>
        <div className={`flex place-items-center flex-col md:flex-row px-6 mt-6`}>
          <Image width={250} height={250} alt={'AI José Gregorio usage example'} src={'/how.svg'} className={'w-1/2 sm:w-1/3 md:hidden'}/>
          <div className={'mt-8'}>
            <h1 className="text-3xl font-medium tracking-tight text-white">{aboutTranslations('how_title')}</h1>
            <p className="mt-6 text-lg text-gray-300">{aboutTranslations('how_content')}</p>
          </div>
          <Image width={250} height={250} alt={'AI José Gregorio usage example'} src={'/how.svg'} className={'w-[10rem] ml-14 hidden md:inline-flex mt-4'}/>
        </div>
      </div>
    </section>
  )
}