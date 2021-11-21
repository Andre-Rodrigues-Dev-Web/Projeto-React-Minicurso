import { Card } from '../../components/cards';

//Styled Components
import{
  Row
} from '../../components/grids/style'
import{
  Wrap
} from './style'

//Postagens
import { posts } from './posts'

function Home(props) {
  return (
    <Wrap>
      <header>
        <div className="overlay">
          <div className="container">
            <h2>Seja bem vindo ao meu site exemplo do minicurso sobre React</h2>
          </div>
        </div>
      </header>
      <main>
        <Row>
          {posts.map( (post, index) => 
            <Card key={index} 
             titlecard={ post.title }
             descriptioncard={ post.content }
            />
          ) }
        </Row>
      </main>
    </Wrap>
  );
}


export default Home;
  