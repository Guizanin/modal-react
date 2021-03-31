
import './App.css';

import Modal from './component/Modal';

function App() {
  return (
    <div className="App">
      <button id="modalPrimari" class="button">
        Chama modal
      </button>
      <Modal btnOpen="modalPrimari" modalClass="classteste" modalTitle="Título do modal" btnOpen2Modal="openModal2">
        <p className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Modal>
      <Modal btnOpen="openModal2"  modalTitle="Título do modal teste 2" >
        <p className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Modal>
    </div>
  );
}

export default App;
