import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    gap:3rem;

    margin-top: 3rem;
    p{
        font-size:1.1rem;
        color:var(--danger)
    };s

    h2{

        color: var(--shape);
        font-weight: 600;
        font-size:1.5rem;
    };

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon_title{
        font-size:3rem;
        color: var(--shape);
        padding: 0rem 1rem;
    };

    form{
        background:var;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;    
        border-radius:1rem;
        width:50%;
        padding:3rem;
        gap: 2.5rem;
        
        .input_container{
            width:100%;

            label{
                font-size: 1.2rem;
                color: var(--shape);
                margin-bottom: 1rem;
            }
        };

        input{
            width: 100%;
            height:3rem;
            border-radius:0.45rem;
            border: 0;
            padding: 0 0.5rem;
            font-size: 1.2rem;
            color: var(--text_dark);
            &:focus{
                background: var(--blue_ligth_50);
            };

        }
    };

    button{
        width: 15rem;
        height: 3rem;
        border: 0;
        border-radius:0.25rem;
        margin-bottom: 2rem;
        padding:0rem 0.5rem;
        font-size:1.25rem;
        text-transform: uppercase;
        font-weight:500;
        color:var(--shape);
        background: var(--blue_ligth);

        display: flex;
        align-items: center;
        justify-content:space-around;

        
        &:hover {
            background: var(--blue_ligth_200);
        };


        .icon{ font-size:2rem}
        }    

`;