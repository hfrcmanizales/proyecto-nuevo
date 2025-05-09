import React from 'react'
import {useState} from 'react'

export const useModal = (inicio=false)=>{
	const [open,setOpen]=useState(inicio)

	const abrir = ()=>setOpen(true)

	const cerrar = ()=>setOpen(false)
	 
	 return [open,abrir,cerrar]
	
}