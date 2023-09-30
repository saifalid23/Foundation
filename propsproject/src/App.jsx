import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myobj = {username:"saif", age:23}
  return (
    <>

      <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="chaiaurcode" />
      <Card username="hitesh" />

    </>
  )
}

export default App
