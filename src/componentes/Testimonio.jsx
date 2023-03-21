import React from "react";

function Testimonio(props) {
  return (
    <div className="testimonio--container">
      <div className="testimonio--image">
        <img
          className="img--testimonio"
          src={require(`../images/testimonio-${props.imagen}.png`)}
          alt="Foto de Emma" />
      </div>

      <div className="testimonio--body">
        <div className="testimonio--meta">
          <p className="nombreTestimonio">
            <strong>{props.nombre} </strong>
            en {props.pais}</p>
          <p className="cargoTestimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        </div>
        <div className="testimonio--texto">
          <p className="textoTestimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonio;