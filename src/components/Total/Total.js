import React from "react"

class Total extends React.Component {

    constructor(props) {
        super()
    }

    state = {
        total: 0
    }

    render() {
        return (
            <h3>Total: {this.state.total}</h3>
        )
    }
}

export default Total