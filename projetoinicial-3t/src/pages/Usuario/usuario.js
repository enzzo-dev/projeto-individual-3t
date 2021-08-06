import { useEffect, useState } from "react";
import axios from 'axios'

function Usuario(){
    const[nome, setNome] = useState('')
    const[senha, setSenha] = useState('')
    const[email, setEmail] = useState('')

    const[listaUsuarios, setListaUsuarios] = useState([])

    function cadastrarUsuario(event){
        event.preventDefault();

        axios.post('http://localhost:5000/api/usuario', {
                nome : nome,
                email: email,
                senha : senha
            }, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
                }
            }

            .then( resposta => {
                if(resposta.status === 200){
                    setListaUsuarios(resposta.data)
                    console.log('Usuário cadastrado')
                }
            })

            .catch((error) => console.log(error))
    )}

    return(
        <div>
         {/* <main>
                <table>
                    <thead>
                        <td>#</td>
                        <td>Marca</td>
                        <td>Tipo</td>
                        <td>Numero de Serie</td>
                        <td>Descricao</td>
                        <td>Numero do Patrimonio</td>
                        <td>Disponivel</td>
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
                                            }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <section>
                    <form>
                        <input
                            value={numeroSerie}
                            name="numeroSerie"
                            type="text"
                            onChange={(event) => {setNumeroSerie(event.target.value)}}
                        />
                        <input
                            value={numeroPatrimonio}
                            name="numeroPatrimonio"
                            type="text"
                            onChange={(event) => {setNumeroPatrimonio(event.target.value)}}   
                        />

                    </form>
                </section>
            </main> */}
            </div>
    )
}
export default Usuario;