import React from 'react';
import {useState} from 'react';


const form = {
	artist:"",
	name:""
}


function Form({dato}){
   
   const [data,setData]=useState(form)

   const handleChange = ({target})=>{
      setData({
      ...data,
      [target.name]:target.value
      })
   }
    
   const handleSubmit = (e)=>{
        e.preventDefault();
        if(!data.artist||!data.name){
        return
        }

        dato(data)
        setData(form)
   }


	return(
	<div>
	  <h2>artistas</h2>
	  <form onSubmit={handleSubmit}>
	    <input 
	    placeholder="cantante" 
	    type="text" 
	    name="artist" 
	    value={data.artist}
	    onChange={handleChange}
	    />
	    <input 
	    type="text" 
	    name="name"
	    placeholder="cancion"
	    onChange={handleChange}
	    value={data.name}
	    />
	    <button type="submit">enviar</button>
	  </form>
	</div>
	)
}

export default Form;