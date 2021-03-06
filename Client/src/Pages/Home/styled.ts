import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    .App-logo{
        width:12rem;
        pointer-events: none;

    };

    @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    }
    };

        @keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    };
    .header_input{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top:4rem;
    .btn-SingUp{
        width: 15rem;
        height: 3rem;
        border: 0;
        border-radius:0.25rem;
        

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
        };
    };
`;


