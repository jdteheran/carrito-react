import React from 'react'
import Fruta from './components/Fruta'
import Total from './components/Total'

class App extends React.Component {

    constructor(props) {
        super()
    }

    sumar_subtotales = (subtotal) => {
        console.log(subtotal);
    }

    render() {
        return (
            <>
                <Fruta nombre='manzana' precio={500} metodo={this.sumar_subtotales} />
                <Fruta nombre='fresa' precio={700} metodo={this.sumar_subtotales} />
                <Fruta nombre='banano' precio={200} metodo={this.sumar_subtotales} />
                <Total />
            </>
        )
    }
}

export default App