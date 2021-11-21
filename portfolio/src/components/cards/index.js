import { 
  Containercard,
  Containercardmd 
} from "./style";

function Card(propscard) {
    return (
      <Containercard
        className="bg-dark text-white"
      >
        <div className="card-header">
            <img className="card-img" src="holder.js/100x180/" alt=""/>
        </div>
        <div className="card-body">
            <h3 className="card-title">{propscard.titlecard}</h3>
            <p className="card-text">{propscard.descriptioncard}</p>
        </div>
      </Containercard>
    );
  }
  

function Cardmd(propscardmd) {
  return (
    <Containercardmd
      className="bg-dark text-white"
    >
      <div className="card-header">
          <img className="card-img" src="holder.js/100x180/" alt=""/>
      </div>
      <div className="card-body">
          <h3 className="card-title">{propscardmd.titlecard}</h3>
          <p className="card-text">{propscardmd.descriptioncard}</p>
      </div>
    </Containercardmd>
  );
}


export {
  Card, 
  Cardmd
}
