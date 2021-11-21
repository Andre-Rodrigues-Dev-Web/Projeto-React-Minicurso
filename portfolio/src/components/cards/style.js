import style from "styled-components";

const Containercard = style.div`
    border-radius: 8px;
    box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 28%);
    margin-left: 10px;
    min-height: 10vh;
    width: 33.33%;
    &:first-child{
        margin-left: 0;
    }
    &.bg-dark{
        background-color: #181616;
    }
    &.text-white{
        color: #fff;
    }
    .card-body{
        padding: 1rem;
        .card-title{
            font-size: 1.6em;
            position: relative;
            &::after{
                background-color: #fff;
                content: "";
                height: 3px;
                position: absolute;
                left: 0;
                top: 48px;
                width: 20%;
            }
        }
        .card-text{
            margin-top: 20px;
        }
    }
    .card-header{
        .imagem{
            background-image: url("https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80");
            background-position: center;
            background-repeat: no-repeat;
            background-size cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            height: 30vh;
        }
    }
`;

const Containercardmd = style.div`
    border-radius: 8px;
    margin: 10px auto;
    min-height: 10vh;
    width: 1300px;
    &.bg-dark{
        background-color: #181616;
    }
    &.text-white{
        color: #fff;
    }
    .card-body{
        padding: 1rem;
        .card-title{
            font-size: 1.6em;
            position: relative;
            &::after{
                background-color: #fff;
                content: "";
                height: 3px;
                position: absolute;
                left: 0;
                top: 48px;
                width: 20%;
            }
        }
        .card-text{
            margin-top: 20px;
        }
    }
`;


export{
    Containercard,
    Containercardmd
}