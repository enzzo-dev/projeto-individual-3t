import { useState, useEffect } from "react"
import axios from 'axios'

function Sala(){
    const [andar, setAndar] = useState(0)
    const [nome, setNome] = useState('')
    const [metragem, setMetragem] = useState(0)
    const [idUsuario, setIdUsuario] = useState('')


    function cadastrarSala(event){
        event.preventDefault()
        let sala = {

        }
        axios.post('http://localhost:5000/api/sala')
    }
}




export default Sala;