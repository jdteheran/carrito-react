import React from "react"

class Total extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <h3>Total: {this.props.valor}</h3>
        )
    }
}

export default Total