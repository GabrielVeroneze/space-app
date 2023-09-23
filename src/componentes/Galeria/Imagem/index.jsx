import styled from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin: 0;
    max-width: 100%;
    overflow: hidden;

    & > img {
        display: block;
        width: 100%;
    }

    figcaption {
        background-color: #001634;
        padding: 1rem 1rem 1rem 1.375rem;

        h3, h4 {
            color: #FFF;
            line-height: normal; 
            margin: 0;
        }

        h3 {
            font-family: 'GandhiSans-Bold';
            font-size: 1.25rem;
        }

        h4 {
            flex-grow: 1;
            font-size: 1rem;
            font-weight: 400;
        }
    }
`

const Rodape = styled.div`
    display: flex;
    gap: 1.5rem;
`

const Imagem = ({ titulo, fonte, path }) => {
    return (
        <Figure>
            <img src={path} />
            <figcaption>
                <h3>{titulo}</h3>
                <Rodape>
                    <h4>{fonte}</h4>
                    <BotaoIcone>
                        <img src="/icones/favorito-inativo.svg" alt="Ícone de favorito" />
                    </BotaoIcone>
                    <BotaoIcone>
                        <img src="/icones/expandir.svg" alt="Ícone de expandir" />
                    </BotaoIcone>
                </Rodape>
            </figcaption>
        </Figure>
    )
}

export default Imagem