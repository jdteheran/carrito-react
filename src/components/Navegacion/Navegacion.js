import React from "react";
import { Link } from "react-router-dom";

class Navegacion extends React.Component {

    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to={'/'}>
                            Carrito
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pag1'}>
                            Pagina1
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pag2'}>
                            Pagina2
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default Navegacion