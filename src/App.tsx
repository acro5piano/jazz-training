import { useEffect, useState } from 'react'

const KEYS = 'CDEFGAB'.split('')

export function App() {
  const [codes, setCodes] = useState<string[]>([])

  useEffect(() => {
    const pid = setInterval(() => {
      setCodes((codes) => {
        if (codes.length % 4 === 0) {
          const rand = Math.floor(10 * Math.random()) % KEYS.length
          return [...codes, KEYS[rand]]
        }
        if (codes.length === 400) {
          alert('Well Done! OK to restart.')
          return []
        }
        return [...codes, '.']
      })
    }, 1000)
    return () => clearInterval(pid)
  }, [])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [codes.length])

  return (
    <>
      <h1> Jazz Training</h1>
      <div>
        {codes.map((code, i) => (
          <div key={i}>{code}</div>
        ))}
      </div>
    </>
  )
}
