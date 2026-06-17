import { useTypingAnimation } from '../hooks/useTypingAnimation'

const phrases = [
  'MERN Stack Developer',
  'React.js Frontend Builder',
  'AI-Powered Web App Developer',
  'Responsive UI Engineer',
]

export default function TypingText() {
  const text = useTypingAnimation(phrases)

  return (
    <span className="inline-flex min-h-[2rem] items-center text-cyan-200">
      {text}
      <span className="ml-1 h-7 w-[2px] animate-pulse bg-cyan-300" />
    </span>
  )
}
