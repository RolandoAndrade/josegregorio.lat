import { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  content: string;
  icon: ReactNode
}

export function FeatureCard({
  title,
  content,
  icon
}: FeatureCardProps) {
  return (
    <div className={'flex p-8 flex-row place-items-center'}>
      {icon}
      <div>
        <h1 className="text-lg font-medium tracking-tight text-gray-900">{title}</h1>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  )
}