import React, { useEffect } from 'react'
import { Labelform } from './LabelForm'
import { useState } from 'react'
import axios from 'axios'

export const CepForm = () => {

  const[data, setData] = useState ({

  })

  


 const getDataCep = () => {
  axios.get('https://viacep.com.br/ws/01001000/json/')
  .then(response => {
    setData(response.data)
  })

 }
    
 useEffect(() => {
  getDataCep()
 })
    
  return (
    
    
    <div>

        <h1>Cadastro de enderço</h1>
        <form action="">

        <Labelform name='Cep' />
        <input type="text"
         placeholder='digite Cep'name='cep'
          id='cep'
          />

        <Labelform name='Logradouro' />
        <input type="text" 
        placeholder='Digite nome da rua ' 
        name='logradouro' 
        id='logradouro' />

        <Labelform name='Numero' /> 
        <input type="text"
        name='numero'
        id='numero' />

        <Labelform name='Bairro' />
        <input type="text" 
         placeholder='Bairro'
         name='bairro'
        id='bairro'/>
        

        <Labelform name='Localidade' />
        <input type="text" 
        placeholder='Localidade' 
        name='localidade'
         id='localidade'/>

        <Labelform name='UF' />
        <input type="text" 
        name='uf' 
        id='uf' />

        
        {JSON.stringify(data)}
        </form>
   
    </div>
    
  )
}
