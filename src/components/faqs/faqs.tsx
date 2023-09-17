import { useTranslations } from 'next-intl';
import { FaqCard } from '@/components/faqs/faq-card';

export function Faqs() {
  const faqsTranslations = useTranslations('FAQs');
  return (
    <section id={'faqs'} className={'overflow-hidden py-20 sm:py-32 bg-gray-100 border-y border-gray-200'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faqs-title" className="text-3xl font-medium tracking-tight text-gray-900">
            {faqsTranslations('faqs_title')}
          </h2>
          <p className="mt-2 text-lg text-gray-600"> {faqsTranslations('faqs_subtitle')}</p>
        </div>
        <ul role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul role="list" className="space-y-10">
              <FaqCard question={faqsTranslations('q1')} answer={faqsTranslations('a1')} />
              <FaqCard question={faqsTranslations('q3')} answer={faqsTranslations('a3')} />
            </ul>
          </li>
          <li>
            <ul role="list" className="space-y-10">
              <FaqCard question={faqsTranslations('q2')} answer={faqsTranslations('a2')} />
              <FaqCard question={faqsTranslations('q5')} answer={faqsTranslations('a5')} />
            </ul>
          </li>
          <li>
            <ul role="list" className="space-y-10">
              <FaqCard question={faqsTranslations('q4')} answer={faqsTranslations('a4')} />
              <FaqCard question={faqsTranslations('q6')} answer={faqsTranslations('a6')}>
                <a href="mailto:contact+josegregorio@rolandoandrade.me"
                   className="text-indigo-500 hover:text-indigo-600 inline text-sm ml-1">
                   email
                </a>
              </FaqCard>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}