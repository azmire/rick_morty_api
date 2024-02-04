import "../index.css";

function CreateModal(props) {
  let closeModal = props.closeModal;
  let modalInfo = props.modalInfo;
  return (
    <>
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") {
            closeModal(false);
          }
        }}
      >
        <div className="modal-content">
          <h2>{modalInfo.props.name}</h2>
          <img
            className="modal-image"
            src={modalInfo.props.image}
            alt="name"
          ></img>
          <p>Species: {modalInfo.props.species}</p>
          <p>Status: {modalInfo.props.status}</p>
          <button className="close" onClick={() => closeModal(false)}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateModal;
