import React from 'react';
import {useModal} from '../useModal.jsx'

function Modal({children,open,abrir,cerrar}){

   const parar = (e)=>{
      e.stopPropagation()
   }

	return(
	<article className={`modal ${open&&"is-open"}`} onClick={cerrar}>
	  <div className="container" onClick={parar}>
	   <button onClick={cerrar} className="close">cerrar</button>
       {children}

	  </div>
	</article>
	)
}

export default Modal