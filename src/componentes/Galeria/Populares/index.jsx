import styled from "styled-components";
import Titulo from "../../Titulo"
import fotosPopulares from "./fotos-populares.json"

const ColunaFotos = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;

    @media screen and (max-width: 1024px) {
        margin: 1.625rem 0 1.5rem;
    }
`

const ImagemEstilizada = styled.img`
    border-radius: 20px;
    max-width: 212px;

    @media screen and (max-width: 1024px) {
        height: 158px;
        max-width: 156px;
    }
`

const Botao = styled.button`
    background: none;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    color:#FFF;
    cursor: pointer;
    font-family: 'GandhiSans-Bold';
    font-size: 1.25rem;
    line-height: normal;
    padding: 0.875rem;
    width: 100%;
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotosPopulares.map(foto => (
                    <ImagemEstilizada
                        key={foto.id}
                        src={foto.path}
                        alt={foto.alt}
                    />
                ))}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares