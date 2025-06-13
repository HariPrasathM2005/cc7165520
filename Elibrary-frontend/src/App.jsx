import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Home from './pages/Home'*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-blue-100 p-6'>
        <h1 className=''text-3x1 font-bold mb-4 text-center>Elibrary</h1>
        {/*<Home />*/}
      </div>
    </>
  )
}

export default App
