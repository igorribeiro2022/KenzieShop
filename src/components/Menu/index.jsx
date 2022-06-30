import { Outlet } from "react-router-dom";
import { Bag, Header } from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Menu() {
    const navigate = useNavigate();
    const products = useSelector(store => store.cart)

    return (
        <>
        <Header>
            <figure>
                <img src="./apple.ico" alt="Apple" onClick={() => navigate("../", { replace: true })}/>
            </figure>
            <ul>
                <li>Loja</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV e Casa</li>
                <li>Só na Apple</li>
                <li>Acessórios</li>
                <li>Suporte</li>
            </ul>
            
            <Bag onClick={() => navigate("../carrinho", { replace: true })} />
            {products?.length > 0 ? <p>{products.length}</p> : <></>}
        </Header>
        <Outlet/>
        </>
    )
}