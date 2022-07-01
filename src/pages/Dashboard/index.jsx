import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Main } from "./style";
import { ProductsContext } from "../../Providers/products";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";


export default function Dashboard() {

  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Main>
        
            <ul>
              {products.map((elem)=> (
                <li key={elem.id}>
                  <figure>
                    <img src={elem.img} alt={elem.name} />
                  </figure>
                  <p>{elem.name}</p>
                  <p>{elem.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                  <div>
                    <p>Entrega:</p>
                    <p>Em Estoque</p>
                    <span>Frete Grátis</span>
                  </div>
                  <button onClick={() => {
                    addToCart(elem)
                    toast.info(`${elem.name} foi adicionado na sacola!`, {className: 'black-background'})
                  }}>Colocar na sacola</button>
                </li>
              ))}
            </ul>
        
      </Main>
    </motion.div>
  );
}
