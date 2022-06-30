import styled from "styled-components";

export const DivCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    main {
        width: 70vw;
        height: 100vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 0px;
        }

        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            width: 100%;
            padding-top: 50px;

            li {
                width: 90%;
                margin: 20px auto;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;


                figure {
                    width: 30%;
                    max-height: 500px;

                    overflow: hidden;

                    background-color: white;
                    border-radius: 10px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                img {
                    width: 100%;
                }

                div {
                    padding: 20px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: flex-start;

                    width: 40%;
                    height: 200px;

                    span {
                        color: #0077ED;
                    }
                }

                button {
                    background-color: #0077ED;
                    border: none;
                    border-radius: 10px;

                    height: 35px;
                    width: 20%;
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
        }
    }

    aside {
        width: 30vw;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            width: 95%;
            height: 150px;
            margin: auto;

            background-color: rgb(255,255,255,0);

            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                width: 60%;
                margin: auto;

            }

            button {
                    background-color: #0077ED;
                    border: none;
                    border-radius: 7px;

                    height: 45px;
                    width: 100px;
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
    }
`
export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    div {
        width: 70%;
        margin: 170px auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;

        h1 {
            font-size: 30pt;
        }

        p {
            font-size: 15pt;
        }
    }

`