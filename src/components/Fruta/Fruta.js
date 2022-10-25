import React from 'react'

class Fruta extends React.Component {

    constructor(props) {
        super()
        console.log('me ejecuté constructor');
    }

    componentDidMount() {
        console.log('me ejecuté componentDidMount');
    }

    state = {
        cantidad: 0,
    }

    quitar = () => {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    agregar = () => {
        this.setState({
            cantidad:  this.state.cantidad + 1
        })
    }

    render() {
        console.log('me ejecuté render');
        return (
            <>
                <h3>Fruta: {this.props.nombre}</h3>
                <p>Precio: {this.props.precio}</p>
                <p>Cantidad: {this.state.cantidad}</p>

                <button onClick={this.quitar}>-</button>
                <button onClick={this.agregar}>+</button>

                <h4>Total: {this.state.cantidad * this.props.precio}</h4>
                <hr />
            </>
        )
    }
}

export default Fruta