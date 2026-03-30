import './App.css'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'

function App() {
  

  return (
    <div className=" min-h-screen flex flex-col bg-[#f5f5f5]">
      <nav>
        <Navbar/>
      </nav>
      <main className="flex-grow ">
        <div className="max-w-7xl mx-auto px-10 py-10">
          <Banner />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
