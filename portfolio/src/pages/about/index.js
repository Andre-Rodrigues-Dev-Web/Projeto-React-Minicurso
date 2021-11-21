//Components diretos
import { Cardmd } from '../../components/cards'


//Styled Components

import{
  Row
} from '../../components/grids/style'

import {
  Wrap
} from './style'

function About() {
    return (
      <Wrap>
        <article>
          <Row>
            <Cardmd
              titlecard="Sobre o minicurso?"
            />
          </Row>
        </article>
      </Wrap>
    );
  }
  
export default About;
  