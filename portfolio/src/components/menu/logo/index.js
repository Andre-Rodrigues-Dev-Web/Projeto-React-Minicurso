
//Componentes diretos

//Styled Components
import {
    Containerlogo
} from './style'


function Logo(props) {
    return (
        <Containerlogo>
            <h1>{props.nomelogo}</h1>
        </Containerlogo>
    );
}

export default Logo;