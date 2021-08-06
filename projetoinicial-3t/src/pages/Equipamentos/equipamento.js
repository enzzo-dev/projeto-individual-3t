import {useEffect, useState} from 'react'
import axios from 'axios'
import { Switch } from 'react-router-dom'
import './equipamento.css'
import Header from '../../Components/header/header'

function Equipamento(){

    const [listaEquipamento, setListaEquipamento] = useState([])
    const [marca, setMarca] = useState('')
    const [tipo, setTipo] = useState('')
    const [numeroSerie, setNumeroSerie] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [numeroPatrimonio, setNumeroPatrimonio] = useState(0)
    const [disponivel, setDisponivel] = useState(false)

    function buscarEquipamentos(){
        axios("http://localhost:5000/api/equipamento",  {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if(resposta.status === 200 ){
                    setListaEquipamento(resposta.data)
                    console.log(listaEquipamento)
                }
            })

            .catch(erro => {
                console.log(erro)
            })
        
    }

    function cadastrarEquipamentos(event){
        event.preventDefault()
        let cadastro = {
            marca : marca,
            tipo : tipo,
            numeroSerie : numeroSerie,
            descricao : descricao,
            numeroPatrimonio : numeroPatrimonio,
            disponivel : disponivel
        }
        axios.post("http://localhost:5000/api/equipamento",cadastro, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            }
        )

        .then(resposta => {
            if(resposta.status === 201){
                console.log("Equipamento cadastrado!")
                buscarEquipamentos()
            }
        })
        .catch(erro => {
            console.log(erro)
        })
    }

    useEffect(buscarEquipamentos, [])

    return(
        <div>
            <Header />
           <main>
                <section className="sec_1">
                    <div className="content">
                        <div className="titulo-cadastrarEquipamento">
                            <h1>Cadastrar Equipamento</h1>
                            <hr />
                        </div>
                    </div>

                    <form className="form content">
                        <div class="grid_1">
                            <input type="text" placeholder="Tipo de Equipamento"/>
                            <input type="text" name="email" placeholder="Marca" class="input watermark" />
                        </div>

                        <div className="grid_1">  

                            <input type="number" name="name" placeholder="Nº de Serie" class="input watermark" />
                            <input type="number" name="empresa" placeholder="Nº de Patrimonio" class="input watermark" />

                        </div>

                        <input type="text" className="descricao" name="text" placeholder="Descrição" />

                        <h2>Estado</h2>
                    <div className="coluna">
                            <div class="coluna2">

                                <input type="checkbox" name="estado" id="estado" />
                                <label for="estado">Ativo</label>

                            </div>
                            <div className="coluna2">

                                <input type="checkbox" name="estado" id="estado" />
                                <label for="estado">Inativo</label>

                            </div>
                    </div>

                            <div className="grid_1"id="botao">
                                <button type="submit" name="button">Cadastrar</button>
                            </div>
                    
                    </form>
                </section>

                
                <section className="sec_1">
                    <div className="content">
                        <div class="titulo-cadastrarEquipamento">
                            <h1>Editar Equipamento</h1>
                            <hr></hr>
                        </div>
            
                    </div>

                    <form className="form content">
                        <div class="grid_1">

                            <input type="text" placeholder="Tipo de Equipamento"/>
                            <input type="text" name="email" placeholder="Marca" class="input watermark" />

                        </div>

                        <div className="grid_1">                    

                            <input type="number" name="name" placeholder="Nº de Serie" class="input watermark" />
                            <input type="number" name="empresa" placeholder="Nº de Patrimonio" class="input watermark" />

                        </div>

                        <input type="text" className="descricao" name="text" placeholder="Descrição" />

                        <h2>Estado</h2>
                    <div className="coluna">
                            <div className="coluna2">

                                <input type="checkbox" name="estado" id="estado" />
                                <label for="estado">Ativo</label>

                            </div>
                            <div className="coluna2">

                                <input type="checkbox" name="estado" id="estado" />
                                <label for="estado">Inativo</label>
                
                            </div>
                    </div>
                    
                    <div className="grid_1"id="botao">
                            <button type="submit" name="button">Editar</button>
                    </div>
                    
                    </form>
                </section>
            </main>
        </div>
    )
}


export default Equipamento;