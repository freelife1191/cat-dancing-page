import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const { isAnimating, animationCount, toggleAnimation } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          className={`dance-button ${isAnimating ? 'active' : ''}`}
          onClick={toggleAnimation}
          aria-label={isAnimating ? '댄스 정지' : '댄스 시작'}
        >
          {isAnimating ? '🛑 댄스 정지' : '💃 댄스 시작'}
        </button>
      </div>

      <div className="dance-info">
        <p>{isAnimating ? '고양이가 신나게 춤추고 있어요! 🎵' : '고양이가 휴식 중이에요 😴'}</p>
        <p className="dance-counter">댄스 횟수: {animationCount}번</p>
        <p className="keyboard-hint">💡 스페이스바를 눌러서도 댄스를 시작/정지할 수 있어요!</p>
      </div>
    </div>
  )
}

export default DancingCat