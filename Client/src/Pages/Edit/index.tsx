import React,{useState,useEffect} from 'react';
import {Container} from './styled';
import { BsFillPersonCheckFill,BsPencilSquare } from "react-icons/bs";
import {SubmitHandler, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../../services/api';

interface FormsType{
    razaoSocial: string;
    nomeFantasia:string;
    cnpjCpf: string;
    cidade: string;
    estado: string;
    telefone:string;
};


const schema = yup.object({
    razaoSocial:yup.string().required('Razão Social é obrigatório'),
    nomeFantasia:yup.string().required(' Nome Fantasia é obrigatório'),
    cnpjCpf:yup.string().matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,"Formato Inválido use os . e -").required("Formato Inválido, use os . e -"),
    cidade:yup.string().required('Cidade é obrigatório'),
    estado:yup.string().required('Estado é obrigatório'),
    telefone:yup.string().required('Telefone é obrigatório'),

}).required();


interface Params{
    id:string;
}

export function Edit(){

    const[razao_social, setRazao_social] = useState('');
    const[nome_fantasia, setNome_fantasia] = useState('');
    const[cpf_cnpj, setCpf_cnpj] = useState('');
    const[client_fone, setClient_fone] = useState('');
    const[client_cidade, setClient_cidade] = useState('');
    const[client_estado, setClient_estado] = useState('');


    const {register,handleSubmit, formState:{errors}} = useForm<FormsType>({
        resolver:yupResolver(schema)
    });

    const {id} = useParams<Params>();

    console.log(id);

    async function getClientById(){
        const response = await api.get(`/client/${id}`)
        console.log(response.data);
       
    };

    useEffect(() => {
        getClientById();
    } ,[]);


    const onSubmit: SubmitHandler<FormsType> = data => {
            let dataName = data;
            if(!data){
                console.error('Error');
            }else{
                goBack();
            }
            console.log(dataName)
    };

   

    const {goBack} = useHistory();
   

    return (
        
        <Container>
            <div className="header">
                <h2>Alterar Cadastro</h2>
                <BsPencilSquare className="icon_title"/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="input_container">
                    <label>Razão Social</label>
                    <input 
                    type="text"
                    placeholder='Razão Social'
                    defaultValue={razao_social}
                    {...register("razaoSocial")}
                      />
                      <p>{errors.razaoSocial?.message}</p>
                </div>
                
                <div className="input_container">
                    <label>Nome Fantasia</label>
                    <input 
                    type="text"
                    placeholder='Nome Fantasia'
                    defaultValue={nome_fantasia}
                    {...register("nomeFantasia")}
                    />
                    <p>{errors.nomeFantasia?.message}</p>
                </div>

                <div className="input_container">
                    <label>Telefone</label>
                    <input 
                    type="text"
                    placeholder='Telefone'
                    defaultValue={client_fone}
                    {...register("telefone")}
                     />
                     <p>{errors.telefone?.message}</p>
                </div>

                <div className="input_container">
                    <label>CNPJ | CPF</label>
                    <input 
                    type="text"
                    placeholder='CNPJ | CPF'
                    defaultValue={cpf_cnpj}
                    {...register("cnpjCpf")}
                     />
                     <p>{errors.cnpjCpf?.message}</p>
                </div>

                <div className="input_container">
                    <label>Cidade</label>
                    <input 
                    type="text"
                    placeholder='Cidade'
                    defaultValue={client_cidade}
                    {...register("cidade")}
                    />
                    <p>{errors.cidade?.message}</p>
                </div>

                <div className="input_container">
                    <label>Estado</label>
                    <input 
                    type="text"
                    placeholder='Estado'
                    defaultValue={client_estado}
                    {...register("estado")}
                     />
                    <p>{errors.estado?.message}</p> 
                </div > 

                    <button type="submit" className="btn-SingUp">
                        <BsFillPersonCheckFill className="icon"/>
                        Confirmar
                    </button>            
                </form>
        </Container>
    );
}
