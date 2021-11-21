// Componente Link
import {
    Link
} from "react-router-dom";

//Componentes diretos

//Styled Components
import {
    Containerlinks
} from './style'


function Links() {
    return (
        <Containerlinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
        </Containerlinks>
    );
}

export default Links;