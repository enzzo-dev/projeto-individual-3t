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
    const [idEquipamento, setIdEquipamento] = useState(0)

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

    function buscarIdEquipamento(equipamento){
        setMarca(equipamento.marca)
        setTipo(equipamento.tipo)
        setNumeroSerie(equipamento.numeroSerie)
        setNumeroPatrimonio(equipamento.numeroPatrimonio)
        setDescricao(equipamento.descricao)
        setIdEquipamento(equipamento.idEquipamento)
        console.log('O Equipamento ' + equipamento.idEquipamento + ' foi selecionado; O idEquipamentoAlterado agora é: '+idEquipamento)
    }

    function atualizarEquipamento(event){
        event.preventDefault()
        let equipamentos = {
            marca : marca,
            tipo : tipo,
            numeroSerie : numeroSerie,
            descricao : descricao,
            numeroPatrimonio : numeroPatrimonio,
            disponivel : true
        }
        axios.patch('http://localhost:5000/api/equipamento/'+idEquipamento,equipamentos)
        .then(resposta => {
            if(resposta.data === 204){
                console.log('Equipamento atualizado!')
                buscarEquipamentos()
            }
        })
        .catch(erro => console.log(erro))
    }

    function excluirEquipamento(equipamento){
        axios.delete('http://localhost:5000/api/equipamento/' + equipamento.idEquipamento)
        .then(resposta => {
            if(resposta.status === 204){
                console.log("O equipamento "+ equipamento.idEquipamento +" foi excluído")
                buscarEquipamentos()
            }
        })
        .catch(erro => console.log(erro))
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

                    <form  onSubmit={idEquipamento === 0 ? cadastrarEquipamentos : atualizarEquipamento} className="form content">
                        <div className="grid_1">
                            <select  className="select-tipo" name="tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} required>
                                <option Disabled value="0">Selecione o tipo de equipamento</option>
                                <option value="Informática">Informática</option>
                                <option value="Eletroeletrônica">Eletroeletrônica</option> 
                                <option value="Mobiliário">Mobiliário</option>  
                            </select>
                            <input type="text"  value={marca} onChange={(event) => setMarca(event.target.value)} name="marca" placeholder="Marca" class="input watermark" required />
                        </div>

                        <div className="grid_1">  

                            <input type="number" minLength="6" name="numeroSerie" value={numeroSerie} placeholder="Nº de Serie" class="input watermark" onChange={(event) => setNumeroSerie(event.target.value)} required/>
                            <input type="number" minLength="6" name="numeroPatrimonio" value={numeroPatrimonio}  placeholder="Nº de Patrimonio"  onChange={(event) => setNumeroPatrimonio(event.target.value)} class="input watermark" required/>

                        </div>

                        <p className="title-descricao">Descrição:</p>
                        <input type="text" value={descricao} className="descricao" onChange={(event) => setDescricao(event.target.value)} name="descricao" required/>

                        <h2>Estado</h2>
                    <div className="coluna">
                            <div class="coluna2">

                                <input type="checkbox"  value={true}  onChange={(event) => setDisponivel(event.target.value)} name="disponivel" id="estado" />
                                <label for="estado">Ativo</label>

                            </div>
                            <div className="coluna2">

                                <input type="checkbox"  value={false} name="disponivel" onChange={(event) => setDisponivel(event.target.value)} id="estado"  />
                                <label for="estado">Inativo</label>

                            </div>
                    </div>

                            <div className="grid_1"id="botao">
                                <button type="submit" name="button">Cadastrar</button>
                            </div>
                    
                    </form>
                </section>
              <section className="Tabela">
              <table>
                    <thead>
                        <td>#</td>
                        <td>Marca</td>
                        <td>Tipo</td>
                        <td>Numero de Serie</td>
                        <td>Descricao</td>
                        <td>Numero do Patrimonio</td>
                        <td>Disponivel</td>
                        <td>Ações</td>
                    </thead>

                    <tbody>
                        {
                            listaEquipamento.map(equipamento => {
                                return(
                                    
                                    <tr key={equipamento.idEquipamento}>
                                        <td>{equipamento.idEquipamento}</td>
                                        <td>{equipamento.marca}</td>
                                        <td>{equipamento.tipo}</td>
                                        <td>{equipamento.numeroSerie}</td>
                                        <td>{equipamento.descricao}</td>
                                        <td>{equipamento.numeroPatrimonio}</td>
                                        <td>{
                                            equipamento.disponivel == true && "Ativo" || "Inativo"
                                            }
                                        </td>
                                        <button onClick={() => buscarIdEquipamento(equipamento)}>Editar</button>
                                        <button onClick={() => excluirEquipamento(equipamento)}>Excluir</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
              </section>
            </main>
        </div>
    )
}


export default Equipamento;