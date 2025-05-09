import React from 'react';
import Form from './form.jsx'
import axios from 'axios'
import {useState,useEffect
} from 'react';

function Select(){
   
   const [search,setSearch]=useState([])
   const [cantante,setCantante]=useState([])
   const [pokemon,setPokemon]=useState([])

   const dato = (dato)=>{
      setSearch(dato)
   }
   
   useEffect(()=>{
      if(search===null) return

      const pedir = async()=>{
        const {artist,id}=search
        
        let art = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`

        let ID = `https://pokeapi.co/api/v2/ability/${name}/`

        const [primero,segundo]=await Promise.all([axios.get(art),axios.get(ID)])


        setCantante(primero)
        setPokemon(segundo)
        console.log(pokemon)
        
       
      }
      pedir()
   },[search])
   
   
	return(
	<div>
	  <h2>buscador de canciones</h2>
	  <Form dato={dato}/>
    <div>
      
    </div>
	</div>
	)
}

export default Select;