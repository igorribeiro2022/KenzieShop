import { Outlet } from "react-router-dom";
import { Bag, Header } from "./style";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/theme";

export function Menu() {
  const { getOpositeTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header>
        <figure>
          <img
            src="./apple.ico"
            alt="Apple"
            onClick={() => navigate("../", { replace: true })}
          />
        </figure>
        <ul>
          <li onClick={() => navigate("../", { replace: true })}>Loja</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV e Casa</li>
          <li>Só na Apple</li>
          <li>Acessórios</li>
          <li>Suporte</li>
          <li>
            <button onClick={getOpositeTheme}>Tema</button>
          </li>
        </ul>
        <button className="buttonThemeMobile" onClick={getOpositeTheme}>Tema</button>
        <div>
          <Bag onClick={() => navigate("../carrinho", { replace: true })} />
          {cart?.length > 0 && <p>{cart.length}</p>}
        </div>
      </Header>
      <Outlet />
    </>
  );
}
