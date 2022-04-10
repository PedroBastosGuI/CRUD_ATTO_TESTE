import React from 'react';
import {Container} from './style';
import { AiOutlineSearch } from "react-icons/ai";


export function Input(){
    return(
        <Container>
                <input type="text" placeholder="Pesquisar Cliente"/>
                <button>
                    <AiOutlineSearch className="icon"/>
                        Pequisar
                </button>
        </Container>
    );
}