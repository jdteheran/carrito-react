import React from 'react'

class Fruta extends React.Component {

    constructor(props) {
        super()
    }

    componentWillUnmount() {
        console.log('me desaparecieron', this.props.nombre);
    }

    state = {
        cantidad: 0,
        subtotal: 0
    }

    quitar = async () => {
        await this.setState({
            cantidad: this.state.cantidad - 1,
            subtotal: (this.state.cantidad - 1) * this.props.precio
        })

        this.enviar_padre()
    }

    agregar = async () => {
        await this.setState({
            cantidad: this.state.cantidad + 1,
            subtotal: (this.state.cantidad + 1) * this.props.precio
        })

        this.enviar_padre()
    }

    enviar_padre = () => {
        this.props.metodo({
            id: this.props.id,
            subtotal: this.state.subtotal
        })
    }

    render() {
        return (
            <>
                <h3>Fruta: {this.props.nombre}</h3>
                <p>Precio: {this.props.precio}</p>
                <p>Cantidad: {this.state.cantidad}</p>

                <button onClick={this.quitar}>-</button>
                <button onClick={this.agregar}>+</button>
                <button >Quitar</button>

                <h4>Subtotal: {this.state.subtotal}</h4>

                <hr />
            </>
        )
    }
}

export default Fruta