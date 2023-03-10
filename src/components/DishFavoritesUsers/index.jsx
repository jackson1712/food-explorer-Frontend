import { Container } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineDelete } from "react-icons/ai";

import imageDish from "../../assets/imageDish.svg";

export function DishFavoritesUsers ({ data, ...rest }) {
    return (
        <Container {...rest}>
                <span>
                <img src={imageDish} alt="imagem da refeição" />
                </span>

                <main>
                    <div>
                        {
                            data.amount &&
                    <h1>
                        {`${data.amount}x`}
                    </h1>
                        }

                    <h2>
                    {data.title}
                    </h2>

                        {
                            data.price && 
                    <span>
                        {`R$: ${data.price}`}
                    </span>
                        }

                    </div>

                    <footer>
                    <ButtonText
                    icon={AiOutlineDelete}
                    title="Excluir prato"
                    />
                    </footer>
                </main>               
        </Container>
    )
}