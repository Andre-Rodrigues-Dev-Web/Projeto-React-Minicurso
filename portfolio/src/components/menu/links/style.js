import style from 'styled-components';

const Containerlinks = style.ul`
    width: 15%;
    li{
        display: inline;
        list-style-type: none;
        margin: 0 20px;
        a{
            color: #fff;
            font-weight: 600;
            text-decoration: none;
        }
    }
`;

export{
    Containerlinks
}