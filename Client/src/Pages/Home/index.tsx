import React, { useEffect, useState } from 'react';
import { Input } from '../../Components/Input';
import { Table } from '../../Components/Table';
import {Container} from './styled';
import { BsFillPersonPlusFill } from "react-icons/bs";
import {useHistory} from 'react-router-dom';
import { api } from '../../services/api';

interface PropsClient{
    razao_social:string;
    nome_fantasia:string;
    cpf_cnpj:string;
    client_fone:string;
    client_cidade:string;
    client_estado:string;
};

export function Home(){
    const {push} = useHistory();

    function handleRoutesNavigation(){
       push('/singup');
    }
    return(
        <Container>
            <div className="header_input">
                <Input
                />
                <button className="btn-SingUp" onClick={handleRoutesNavigation}>
                    <BsFillPersonPlusFill className="icon"/>
                    Cadastrar
                </button>                
            </div>

            <section>
                <Table/>
            </section>

        </Container>
    );
}