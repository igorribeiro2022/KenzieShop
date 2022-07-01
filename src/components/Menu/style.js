import styled from "styled-components";
import { ReactComponent as Sacola } from './bag.svg';

export const Bag = styled(Sacola)`
    fill: white;
    height: 70%;
    margin: auto 10px;
    margin-left: 20px;

    cursor: pointer;
    
    :hover {
        transition: all .3s;
        transform: scale(1.2);
    }

    :active {
        transform: scale(0.95);
    }
`

export const Header = styled.header`

    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    height: 50px;
    background-image: linear-gradient(to bottom, var(--gray-4), var(--gray-4),var(--gray-4), var(--gray-4), var(--gray-4),RGB(0,0,0,0));
    color: var(--gray-0);

    padding: 0 25px 10px 25px;

    .buttonThemeMobile {
        display: none;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
        height: 100%;
        overflow: hidden;

        width: 70px;

        p {
            position: relative;
            top: 13px;
            right: 23px;
            background-color: white;
            color: black;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            text-align: center;
            font-size: 9pt;
            cursor: pointer;
        }
    }

    figure {
        height: 95%;
        width: heigth;

        overflow: hidden;
    }

    img {
        height: 90%;
        cursor: pointer;
    }

    img:hover {
        transition: all .3s;
        transform: scale(1.2);
    }

    img:active {
        transform: scale(0.95);
    }

    ul {
        display: flex;
        width: 75%;
        justify-content: space-between;
        margin: 10px;
        align-items: center;
        list-style: none;

        font-weight:300;
        font-size: 10pt;
        margin: auto;
    }
    
    button {
        width: 40px;
        height: 20px;
        text-align: center;
        border: none;
        border-radius: 5px;
        background-color: ${(props) => props.theme.backgroundColor2};
        color: ${(props) => props.theme.color};
        transition: background-color 0.3s linear, color 0.3s linear;

    }

    li:hover {
        transition: all .3s;
        color: var(--gray-1);
        cursor: pointer;
    }
    
    @media (max-width: 900px) {
        ul {
            display: none;
        }
        
        

        .buttonThemeMobile {
            display: inline;
        }
    }

`