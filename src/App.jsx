import { Navbar, Sidebar, SideMenu } from './components';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ChannelInfo, Home, History, Trending, Videodetails, Search} from './pages/index';
import { useSelector } from 'react-redux';

function App() {
  const {sideBar} = useSelector(state => state.theme);
  return (
    <div className="App">
      <Router basename={window.location.pathname || ''}>
      <Navbar />
        {sideBar ? <SideMenu /> : null}
        <Sidebar />
        <Routes>
          <Route path='/watch/:id' element={<Videodetails />} />
          <Route path='/channel/:id' element={<ChannelInfo />} />
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/search/:genre' element={<Search />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
