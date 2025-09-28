import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이 페이지</h1>
        <p>고양이가 춤을 춥니다!</p>
      </header>
      <main className="main-content">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
