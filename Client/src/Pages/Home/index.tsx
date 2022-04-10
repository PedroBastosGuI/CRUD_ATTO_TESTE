import React from 'react';
import { Input } from '../../Components/Input';
import { Table } from '../../Components/Table';
import {Container} from './styled';
import { BsFillPersonPlusFill } from "react-icons/bs";
import {useHistory} from 'react-router-dom';
import Icon from '../../assets/logo.svg'
export function Home(){
    const {push} = useHistory();

    function handleRoutesNavigation(){
       push('/singup');
    }
    return(
        <Container>
            <div className="header_input">
                <img
                    src={Icon}
                    className="App-logo"
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