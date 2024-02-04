import "../index.css";

function Card(props, key) {
  let openModal = props.openModal;
  let returnInfo = props.cardCharacterInfo;
  return (
    <>
      <div key={key} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="card-image"
              src={props.props.image}
              alt="name"
            ></img>
          </div>
          <div className="flip-card-back">
            <h2>{props.props.name}</h2>
            <div>
              <button
                id={props.props.id}
                className="learn-more-btn"
                onClick={(e) => {
                  openModal(true), returnInfo(props);
                }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
