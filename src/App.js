import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { GithubProvider } from './context/github/GithubContext.jsx'
import { AlertProvider } from './context/Alert/AlertContext.jsx'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router >
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
