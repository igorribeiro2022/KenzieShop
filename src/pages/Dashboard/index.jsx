import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {addToCartThunk} from "../../store/modules/Cart/thunks";
import { Main } from "./style";

export default function Dashboard() {
  const dispatch = useDispatch();
  const product = useSelector((indexStore) => indexStore.product);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Main>
        
            <ul>
              {product.map((elem)=> (
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
                    dispatch(addToCartThunk(elem))
                    toast.success(`${elem.name} foi adicionado na sacola!`)
                  }}>Colocar na sacola</button>
                </li>
              ))}
            </ul>
        
      </Main>
    </motion.div>
  );
}
