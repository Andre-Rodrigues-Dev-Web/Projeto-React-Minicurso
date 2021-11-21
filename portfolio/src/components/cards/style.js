import style from "styled-components";

const Containercard = style.div`
    border-radius: 8px;
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
`;

const Containercardmd = style.div`
    border-radius: 8px;
    margin: 10px auto;
    min-height: 10vh;
    width: 88%;
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