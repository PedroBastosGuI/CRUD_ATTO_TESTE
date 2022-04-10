import {createGlobalStyle} from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    :root{
        --background:#22272E;
        --shape:#f1f1f1;
        --text_dark:#000000;
        --content:#c1c1c1;
        --blue_ligth:#539BDC;
        --blue_ligth_200:#67ace5;
        --blue_ligth_50:#95c9f4;
        --danger:#ff0000;
    };


*{
    margin:0;
    padding:0;
    box-sizing: 0;
};

html{
    @media(max-width:1080px){
        font-size:93.75%;
    };
    @media(max-width:720px){
        font-size: 87.5%;
    };
};


body{
    background: var(--background);
    -webkit-font-font-smooth:antialiased;

};

button {
        cursor: pointer;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight:400;
    }
    h1,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }
`;