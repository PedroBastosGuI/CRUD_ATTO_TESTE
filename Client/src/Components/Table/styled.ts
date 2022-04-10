import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
margin-top: 2rem;

table{
    border-spacing: 0 0.5rem;
    th{
        color:var(--shape);
        font-weight: 400;
        padding:1rem 2rem;
        text-align:center;
        text-transform:uppercase;
        font-weight: 600;
        line-height:1.5rem;
    }
    td{
        padding:1rem 2rem;
        border:0;
        background: var(--shape);
        color:var(--text-body);
        font-size: 0.85rem;
        button{
            background:transparent;
            border: 0;
            margin-left:0.5rem;
            transition: filter 0.6s;  
            &:hover {
            filter: opacity(0.3);
            };
            .icon{
                font-size: 1.5rem;
                color: var(--blue_ligth);
            };
        };

        .link{
            background:transparent;
            border: 0;
            margin-left:0.5rem;
            transition: filter 0.6s;  
            &:hover {
            filter: opacity(0.3);
            };
            .icon{
                font-size: 1.5rem;
                color: var(--blue_ligth);
            };
        }
    };

};

`;




