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

        font-weight:100;
        font-size: 11pt;
        margin: auto;
    }
    
    li:hover {
        transition: all .3s;
        color: var(--gray-1);
        cursor: pointer;
    }
    


`