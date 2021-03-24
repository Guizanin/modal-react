import './app.css'
import Modal from './component/Modal';

function App() {
  return (
    <div className="App">
      <button id="modalPrimari" style={{border:'solid 1px ', position:'absolute',top:'40%',left:'40%',fontSize:'20px',padding:'20px', borderRadius:'10px'}}>
        Chama modal
      </button>
      <Modal btnOpen="modalPrimari" modalClass="classteste" modalTitle="Título do modal">
        <p className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Modal>
    </div>
  );
}

export default App;
