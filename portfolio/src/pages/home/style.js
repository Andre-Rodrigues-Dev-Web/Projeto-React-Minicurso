import style from "styled-components";

const Wrap = style.section`
    header{
        background-image: url(https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 8px;
        margin: 1em auto;
        min-height: 50vh;
        width: 88%;
        .overlay{
            background-color: rgba(0, 0, 0, 0.116);
            height: 100%;
            width: 100%;
        }
        .container{
            color: #fff;
            display flex;
            flex-direction: row;
            justify-content: center;
            padding: 10em 0;
            text-align: center;
            h2{
                font-size: 3.5em;
                padding: 0 1em;
                width: 90%;
            }
        }
    }
    main{
        margin: 0 auto;
        width: 88%;
    }
`;

export{
    Wrap
}