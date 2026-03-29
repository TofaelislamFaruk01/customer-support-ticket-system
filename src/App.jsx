
import './App.css'
import Footer from './footer/Footer'
import Navbar from './navbar/navbar'

function App() {
  

  return (
    <div className=" min-h-screen flex flex-col bg-[#f5f5f5]">
      <nav>
        <Navbar/>
      </nav>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl text-black font-bold">Welcome to the CS - Ticket System</h1>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
