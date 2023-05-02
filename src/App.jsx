import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Add from './user/Add';
import Edit from './user/Edit';
import Users from './user/Users';
import Work from './components/Work';

function App() {
  
  return (
    <div className='App bg-white'>
      <Sidenav />
      <Main />
      <Work/>
      <Navbar/>
      <Routes>
        <Route  path='/' exact element={<Home/>} />
        <Route  path='/home' exact element={<Home/>} />
        <Route  path='/users/:id' exact element={<Users/>} />
        <Route  path='/add-user' exact element={<Add/>} />
        <Route  path='/edit-user/:id' exact element={<Edit/>} />
      </Routes>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App