import React,{useState,useEffect} from 'react';
import {Container} from './styled';
import { BsFillPersonCheckFill,BsPencilSquare } from "react-icons/bs";
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import * as yup from 'yup';
interface Params{
    id:string;
};


interface FormElements extends HTMLFormControlsCollection {
    yourInputName: HTMLInputElement
};

interface FormElement extends HTMLFormElement {
   readonly elements: FormElements
};

const schema = yup.object({
    razaoSocial:yup.string().required('Razão Social é obrigatório'),
    nomeFantasia:yup.string().required(' Nome Fantasia é obrigatório'),
    cnpjCpf:yup.string().matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,"Formato Inválido use os . e -").required("Formato Inválido, use os . e -"),
    cidade:yup.string().required('Cidade é obrigatório'),
    estado:yup.string().required('Estado é obrigatório'),
    telefone:yup.string().required('Telefone é obrigatório'),

}).required();

export  function Edit(){

    const[razao_social, setRazao_social] = useState('');
    const[nome_fantasia, setNome_fantasia] = useState('');
    const[cpf_cnpj, setCpf_cnpj] = useState('');
    const[client_fone, setClient_fone] = useState('');
    const[client_cidade, setClient_cidade] = useState('');
    const[client_estado, setClient_estado] = useState('');

    const {id} = useParams<Params>();

    const {push} = useHistory();

    async function updateClient(e:React.FormEvent<FormElement>){
        e.preventDefault();
        const response = await api.patch(`client/${id}`,{
            razao_social:razao_social,
            nome_fantasia:nome_fantasia,
            cpf_cnpj:cpf_cnpj,
            client_fone:client_fone,
            client_cidade:client_cidade,
            client_estado:client_estado
        });
        console.log("eu to indo ae", response);
        push("/");
}

    useEffect(() => {
        getClientById();
    },[])

    async function getClientById(){
        const response = await api.get(`/client/${id}`);
        setRazao_social(response.data.razao_social);
        setNome_fantasia(response.data.nome_fantasia);
        setCpf_cnpj(response.data.cpf_cnpj);
        setClient_fone(response.data.client_fone);
        setClient_cidade(response.data.client_cidade);
        setClient_estado(response.data.client_estado);
    };


    async function validate(){
        const schema = yup.object({
            razaoSocial:yup.string().required('Razão Social é obrigatório'),
            nomeFantasia:yup.string().required(' Nome Fantasia é obrigatório'),
            cnpjCpf:yup.string().matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,"Formato Inválido use os . e -").required("Formato Inválido, use os . e -"),
            cidade:yup.string().required('Cidade é obrigatório'),
            estado:yup.string().required('Estado é obrigatório'),
            telefone:yup.string().required('Telefone é obrigatório'),
        
        }).required();
    }
   
    return (
        
        <Container>
            <div className="header">
                <h2>Alterar Cadastro</h2>
                <BsPencilSquare className="icon_title"/>
            </div>
            
            <form onSubmit={updateClient}>
                <div  className="input_container">
                    <label>Razão Social</label>
                    <input 
                    type="text"
                    placeholder='Razão Social'
                    value={razao_social}
                    onChange={(e) => setRazao_social(e.target.value)
                    }
                      />
                </div>
                
                <div className="input_container">
                    <label>Nome Fantasia</label>
                    <input 
                    type="text"
                    placeholder='Nome Fantasia'
                    value={nome_fantasia}
                    onChange={(e) => setNome_fantasia(e.target.value)}
                    />
                </div>

                <div className="input_container">
                    <label>Telefone</label>
                    <input 
                    type="text"
                    placeholder='Telefone'
                    value={client_fone}
                    onChange={(e) =>  setClient_fone(e.target.value)}
                     />
                </div>

                <div className="input_container">
                    <label>CNPJ | CPF</label>
                    <input 
                    type="text"
                    placeholder='CNPJ | CPF'
                    value={cpf_cnpj}
                    onChange={(e) =>  setCpf_cnpj(e.target.value)}
                     />
                </div>

                <div className="input_container">
                    <label>Cidade</label>
                    <input 
                    type="text"
                    placeholder='Cidade'
                    value={client_cidade}
                    onChange={(e) => setClient_cidade(e.target.value)}
                    />
                </div>

                <div className="input_container">
                    <label>Estado</label>
                    <input 
                    type="text"
                    placeholder='Estado'
                    value={client_estado}
                    onChange={(e) => setClient_estado(e.target.value)}
                     />
                </div > 

                    <button type="submit" className="btn-SingUp">
                        <BsFillPersonCheckFill className="icon"/>
                        Confirmar
                    </button>            
                </form>
        </Container>
    );
}
