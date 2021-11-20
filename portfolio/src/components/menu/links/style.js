import style from 'styled-components';

const Containerlinks = style.ul`
    width: 20%;
    li{
        display: inline;
        list-style-type: none;
        margin: 0 20px;
        a{
            color: #333;
            text-decoration: none;
        }
    }
`;

export{
    Containerlinks
}