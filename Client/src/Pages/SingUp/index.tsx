import React,{useState} from 'react';

import {Container} from './styled';
import {useHistory} from 'react-router-dom';
import { BsFillPersonCheckFill,BsFillFilePersonFill } from "react-icons/bs";

import {SubmitHandler, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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

export function SingUP(){
    const[razao_social, setRazao_social] = useState('');
    const[nome_fantasia, setNome_fantasia] = useState('');
    const[cpf_cnpj, setCpf_cnpj] = useState('');
    const[client_fone, setClient_fone] = useState('');
    const[client_cidade, setClient_cidade] = useState('');
    const[client_estado, setClient_estado] = useState('');


    const {register,handleSubmit, formState:{errors}} = useForm<FormsType>({
        resolver:yupResolver(schema)
    });

    const {goBack,push} = useHistory();

   

    async function AddClient(){
       const response = await api.post('/client', {
         razao_social:razao_social,
         nome_fantasia:nome_fantasia,
         cpf_cnpj:cpf_cnpj,
         client_fone:client_fone,
         client_cidade:client_cidade,
         client_estado:client_estado
        });
        console.log("I am Response", response.data);
    };

     const onSubmit: SubmitHandler<FormsType> = async data => {
        setRazao_social(data.razaoSocial);
        setNome_fantasia(data.razaoSocial);
        setCpf_cnpj(data.razaoSocial);
        setClient_fone(data.razaoSocial);
        setClient_cidade(data.razaoSocial);
        setClient_estado(data.razaoSocial);

        !data ? console.error('erro') : await AddClient();
};

    return (
        <Container>
            <div className="header">
                <h2>Cadastrar Cliente</h2>
                <BsFillFilePersonFill className="icon_title"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div  className="input_container">
                    <label>Razão Social</label>
                    <input 
                    type="text"
                    placeholder='Razão Social'
                    {...register("razaoSocial")}
                      />
                    <p>{errors.razaoSocial?.message}</p>
                </div>

                <div className="input_container">
                <label>Nome Fantasia</label>
                    <input 
                    type="text"
                    placeholder='Nome Fantasia' 
                    {...register("nomeFantasia")}
                    />
                    <p>{errors.nomeFantasia?.message}</p>
                </div>

                <div className="input_container">
                    <label>Telefone</label>
                    <input 
                    type="text"
                    placeholder='Telefone'
                    {...register("telefone")}
                     />
                     <p>{errors.telefone?.message}</p>
                </div>

                <div className="input_container">
                <label>CNPJ | CPF</label>
                    <input 
                    type="text"
                    placeholder='CNPJ | CPF'
                    {...register("cnpjCpf")}
                     />
                     <p>{errors.cnpjCpf?.message}</p>
                </div>

                <div className="input_container">
                <label>Cidade</label>
                    <input 
                    type="text"
                    placeholder='Cidade'
                    {...register("cidade")}
                    />
                    <p>{errors.cidade?.message}</p>
                </div>

                <div className="input_container">
                <label>Estado</label>
                    <input 
                    type="text"
                    placeholder='Estado'
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
