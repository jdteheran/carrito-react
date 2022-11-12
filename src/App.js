import React from 'react'
import Fruta from './components/Fruta'
import Total from './components/Total'
class App extends React.Component {

    constructor(props) {
        super()
    }

    frutas = [
        {
            id: 1,
            nombre: 'Manzana',
            precio: 500
        },
        {
            id: 2,
            nombre: 'Fresa',
            precio: 700
        }, {
            id: 3,
            nombre: 'Banano',
            precio: 200
        }
    ]

    carrito = []

    state = {
        total: 0
    }

    sumar_subtotales = (subtotal) => {
        let sw = false
        let index = null
        let total = 0
        
        this.carrito.forEach((item, k) => {
            if (item.id === subtotal.id) {
                sw = true
                index = k
            }
        })

        if (sw) {
            this.carrito[index] = subtotal
        } else {
            this.carrito.push(subtotal)
        }

        this.carrito.forEach(item => {
            total = total + item.subtotal
        })

        this.setState({
            total: total
        })
    }

    render() {
        return (
            <>
                {
                    this.frutas.map(fruta => <Fruta
                        key={fruta.id}
                        id={fruta.id}
                        nombre={fruta.nombre}
                        precio={fruta.precio}
                        metodo={this.sumar_subtotales}
                    />)
                }
                <Total valor={this.state.total} />
            </>
        )
    }
}

export default App