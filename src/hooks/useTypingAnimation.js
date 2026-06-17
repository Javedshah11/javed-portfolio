import { useEffect, useState } from 'react'

export function useTypingAnimation(words, speed = 90, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const isComplete = !isDeleting && text === current
    const isEmpty = isDeleting && text === ''
    const delay = isComplete ? pause : isDeleting ? speed / 2 : speed

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true)
        return
      }

      if (isEmpty) {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setText((value) =>
        isDeleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [isDeleting, pause, speed, text, wordIndex, words])

  return text
}
