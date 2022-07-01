import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { DivCart, Section } from "./style";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";

export default function Carrinho() {
  const { cart, removeFromCart } = useContext(CartContext)
  

  const valorTotal = cart.reduce((acc, acm) => acc + acm.price, 0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DivCart>
        {cart?.length > 0 ? (
          <>
            <main>
              <ul>
                {cart.map((elem, index) => (
                  <li key={index}>
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
                        removeFromCart(elem)
                        toast.info(`${elem.name} foi removido da sacola!`);
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
                  <p>{cart.length} produtos</p>
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
