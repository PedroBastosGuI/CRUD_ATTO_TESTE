import React,{useState,useEffect} from 'react';
import {Container} from './styled';
import { BsPencilSquare,BsXCircle} from "react-icons/bs";
import {useHistory} from 'react-router-dom';
import { api } from '../../services/api';
import { Link } from "react-router-dom";
interface PropsClient{
    id: number;
    razao_social:string;
    nome_fantasia:string;
    cpf_cnpj:string;
    client_fone:string;
    client_cidade:string;
    client_estado:string;
};

export function Table(){
    const[getData,setGetData] = useState<PropsClient[]>([]);

    useEffect(() => {
        getClient();
    },[]);
    async function getClient(){
        const response = await api.get('/client');
        setGetData(response.data);
    };

    async function deleteClient(id:number){
        await api.delete(`client/${id}`)
        getClient();
    }
    const {push} = useHistory();

    function handleRoutesNavigation(){
        push('/edit');
     }
    return(
        
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Razão Social</th>
                        <th>Nome Fantasia</th>
                        <th>CNPJ | CPF</th>
                        <th>Celular</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {getData.map((item,index)=>(
                        <tr
                            key={item.id}
                        >
                        <td>{item.razao_social}</td>
                        <td>{item.nome_fantasia}</td>
                        <td>{item.cpf_cnpj}</td>
                        <td>{item.client_fone}</td>
                        <td>{item.client_cidade}</td>
                        <td>{item.client_estado}</td>
                        <td>
                            <Link
                               to={`/edit/${item.id}`}
                            >
                                <BsPencilSquare className="icon"/>
                            </Link>

                            <button
                                onClick={() => deleteClient(item.id)}
                            >
                               
                                <BsXCircle className="icon"/>
                            </button>
                        </td>
                    </tr>
                    ))}


    
                </tbody>
            </table>
        </Container>

        
        
    );
};