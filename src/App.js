import './app.css'
import Modal from './component/Modal';

function App() {
  return (
    <div className="App">
      <button id="modalPrimari" style={{border:'solid 1px ', position:'absolute',top:'40%',left:'40%',fontSize:'20px',padding:'20px', borderRadius:'10px'}}>
        Chama modal
      </button>
      <Modal btnOpen="modalPrimari" modalClass="classteste" modalTitle="Título do modal" />
    </div>
  );
}

export default App;
