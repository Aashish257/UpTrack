import "tailwindcss";
import './App.css'
import Navbar from './components/navbar';

function App() {

  return (
    <>
    <Navbar/>
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white text-3xl font-bold">
      Tailwind + Vite 🚀
    </div>
    </>
  )
}

export default App
