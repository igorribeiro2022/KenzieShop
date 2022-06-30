import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeFromCartThunk } from "../../store/modules/Cart/thunks";
import { DivCart, Section } from "./style";

export default function Carrinho() {
  const dispatch = useDispatch();
  const produtosNaSacola = useSelector((store) => store.cart);

  const valorTotal = produtosNaSacola.reduce((acc, acm) => acc + acm.price, 0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DivCart>
        {produtosNaSacola?.length > 0 ? (
          <>
            <main>
              <ul>
                {produtosNaSacola.map((elem) => (
                  <li key={elem.id}>
                    <figure>
                      <img src={elem.img} alt={elem.name} />
                    </figure>
                    <div>
                      <h2>{elem.name}</h2>
                      <h4>
                        {elem.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h4>
                      <p>Entrega:</p>
                      <p>Em Estoque</p>
                      <span>Frete Grátis</span>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(removeFromCartThunk(elem));
                        toast.success(`${elem.name} foi removido da sacola!`);
                      }}
                    >
                      Remover da sacola
                    </button>
                  </li>
                ))}
              </ul>
            </main>
            <aside>
              <div>
                <h2>Resumo do pedido</h2>
                <div>
                  <p>{produtosNaSacola.length} produtos</p>
                  <p>
                    {valorTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button>Finalizar Pedido</button>
              </div>
            </aside>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Section>
              <div>
                <h1>Sua sacola está vazia</h1>
                <p>Adicione Itens</p>
              </div>
            </Section>
          </motion.div>
        )}
      </DivCart>
    </motion.div>
  );
}
