import './App.css'
import Modal from './componentes/modal.jsx'
import {useModal} from './useModal.jsx'
import Select from './select/buscador.jsx'

function App() {
  
  const [open,abrir,cerrar]=useModal(true)
   
  
  return (
    <>
      <div>
      <button onClick={abrir}>abrir</button>
      <Modal
      open={open}
      abrir={abrir}
      cerrar={cerrar}>
        <h2>ejemplo que pasa modal</h2>
        <h3>busca tu cancion y artista favorito</h3>
        <Select/>
      </Modal>
      </div>
     
     
    </>
  )
}

export default App
