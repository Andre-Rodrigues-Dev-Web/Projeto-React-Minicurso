import style from "styled-components";

const Row = style.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 700px){
        flex-direction: row;
    }
`;



export{
    Row
}