type FaqCardProps = {
  question: string;
  answer: string;
  children?: React.ReactNode;
}

export function FaqCard({question, answer, children}: FaqCardProps) {
  return (
    <li>
      <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">{question}</h3>
      <p className="text-sm text-gray-700 inline">{answer}</p>
      {children}
    </li>
  )
}