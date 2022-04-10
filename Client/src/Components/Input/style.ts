import styled from 'styled-components';


export const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;    
    display: flex;
    align-items: center;
    justify-content: center;
    input{
        width: 20rem;
        padding: 0 1rem;

        height: 3rem; 
        border-radius:0.25rem 0rem 0rem 0.25rem;
        border: 0;
        &:focus{
            background: var(--blue_ligth_50);
        };

    };

    button{
        width: 9rem;
        height: 3rem;
        border: 0;
        border-radius:0rem 0.25rem 0.25rem 0rem;

        font-size:1.1rem;
        color:var(--shape);
        background: var(--blue_ligth);

        display: flex;
        align-items: center;
        justify-content:space-around;

        .icon{
            font-size:1.5rem;
        };
        &:hover {
            background: var(--blue_ligth_200);
        };

    };
`;


