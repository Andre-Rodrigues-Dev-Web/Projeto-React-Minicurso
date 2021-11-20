
//Componentes diretos
import Logo from './logo'
import Links from './links'

//Styled Components
import {
    Containermenu
} from './style'



function Menu() {
    return (
        <Containermenu>
            <Logo
                nomelogo="André"
            />
            <Links/>
        </Containermenu>
    );
}

export default Menu;
  