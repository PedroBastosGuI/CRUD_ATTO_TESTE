import React from 'react';

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

    const {push} = useHistory();

    const {register,handleSubmit, formState:{errors}} = useForm<FormsType>({
        resolver:yupResolver(schema)
    });
    
   
   async function addClient(data:FormsType){
            console.log(data);
            const response = await api.post('/client',{
                razao_social:data.razaoSocial,
                nome_fantasia:data.nomeFantasia,
                cpf_cnpj:data.cnpjCpf,
                client_fone:data.telefone,
                client_cidade:data.cidade,
                client_estado:data.estado
            });
            if(!data){
                return
            } else{
                alert("Cliente Cadastrado com sucesso!");
                push("/")
            };
            console.log(response);
    };


    return (
        <Container>
            <div className="header">
                <h2>Cadastrar Cliente</h2>
                <BsFillFilePersonFill className="icon_title"/>
            </div>
            <form onSubmit={handleSubmit(addClient)}>

                <div  className="input_container">
                    <label htmlFor="razaoSocial">Razão Social*</label>
                    <input 
                    type="text"
                    id="razaoSocial"
                    placeholder='Razão Social'
                    {...register('razaoSocial')}
                      />
                      <p>{errors.razaoSocial?.message}</p>
                </div>

                <div className="input_container">
                <label htmlFor="nomeFantasia">Nome Fantasia*</label>
                    <input 
                    type="text"
                    id="nomeFantasia"
                    placeholder='Nome Fantasia'
                    {...register('nomeFantasia')}                    
                    />
                    <p>{errors.nomeFantasia?.message}</p>
                </div>

                <div className="input_container">
                    <label htmlFor="telefone">Telefone*</label>
                    <input 
                    type="text"
                    id="telefone"
                    placeholder='Telefone'
                    {...register("telefone")}
                     />

                    <p>{errors.telefone?.message}</p>

                </div>

                <div className="input_container">
                <label htmlFor="cnpjCpf">CNPJ | CPF*</label>
                    <input 
                    type="text"
                    id="cnpjCpf"
                    placeholder='CNPJ | CPF'
                    {...register("cnpjCpf")}
                     />
                    <p>{errors.cnpjCpf?.message}</p>
                </div>

                <div className="input_container">
                <label htmlFor="cidade">Cidade*</label>
                    <input 
                    type="text"
                    id="cidade"
                    placeholder='Cidade'
                    {...register("cidade")}
                    />

                    <p>{errors.cidade?.message}</p>

                </div>

                <div className="input_container">
                <label htmlFor="estado">Estado*</label>
                    <input 
                    type="text"
                    placeholder='Estado'
                    id="estado"
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
