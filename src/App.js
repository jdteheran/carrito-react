import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Carrito from './pages/Carrito'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2'

class App extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Carrito />} />
                    <Route path="/pag1" element={<Pagina1 />} />
                    <Route path="/pag2" element={<Pagina2 />} />
                </Routes>
            </Router>
        )
    }
}

export default App