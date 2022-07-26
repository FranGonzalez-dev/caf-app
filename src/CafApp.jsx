import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, SongList, SongDetails } from './pages';
import { Navbar } from './components';


const CafApp = () => {
return (
    <Router>
        <Navbar />
        <div className="app">
        <Routes>
                
            <Route path='/' element={ <Home/> }/>
            <Route exact path='/lista' element={ <SongList/> }/>
            <Route exact path='/lista/:id' element={ <SongDetails/> }/>

            <Route path='*'  element={ 
                <main className='redirect-container'>
                    <div className='info'>
                        <h1>Ups! <br /> Acá no hay nada...</h1>
                        <Link to='/'>
                            <p>Volvé al inicio</p>
                        </Link>
                    </div>
                </main>
		    }/>
        </Routes>
        </div>
    </Router>
)}
export default CafApp;