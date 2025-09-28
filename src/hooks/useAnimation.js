import { useState, useEffect, useCallback } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => {
      const newState = !prev
      if (newState) {
        setAnimationCount(count => count + 1)
      }
      return newState
    })
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
    setAnimationCount(count => count + 1)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  // 키보드 접근성: 스페이스바로 애니메이션 토글
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return {
    isAnimating,
    animationCount,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}