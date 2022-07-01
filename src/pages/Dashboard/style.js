import styled from "styled-components";
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
  })`
    .Toastify__toast-icon {
        color: #0077ED;
    }

    button[aria-label="close"] {
        display: none;
    }
   
    .progress {
        background-color: #0077ED;
    }
  `;


export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100vw;
    max-width: 1000px;
    margin: auto;
    padding: 30px 0;

    
    ul {
        list-style: none;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    li {
        margin: 50px 10px;
        background-color: ${(props) => props.theme.backgroundColor2};
        transition: background-color 0.3s linear, color 0.3s linear;

        padding: 20px;

        border-radius: 10px;

        height: 400px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        figure {
            width: 200px;
            height: 200px;

            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
    }

        img {
            width: 100%;
        }

        img:hover {
        transition: all .3s;
        transform: scale(1.1);
    }
        div {
            width: 100%;
            font-size: 9pt;
            font-weight: 300;

            span {
                color: #0077ED;
            }
        }

        button {
            background-color: #0077ED;
            border: none;
            border-radius: 10px;

            height: 35px;
            width: 90%;
            color: var(--gray-0);

            :hover {
                transition: all .3s;
                transform: scale(1.04);
                background-color: #0019ED;
            }

            :active {
                transition: all .3s;
                transform: scale(0.97);
                background-color: #000025;
            }
        }
    }

    @media (max-width: 600px) {
        ul {
            align-items: center;
            flex-direction: column;
        }
    }
`