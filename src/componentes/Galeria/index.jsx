import styled from "styled-components"
import Tags from "./Tags"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Imagem from "./Imagem"

const LayoutGaleria = styled.div`
    display: flex;
`

const GaleriaContainer = styled.section`
    flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <LayoutGaleria>
                <GaleriaContainer>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ul>
                        {fotos.map(foto => <Imagem key={foto.id} {...foto} />)}
                    </ul>
                </GaleriaContainer>
                <Populares />
            </LayoutGaleria>
        </>
    )
}

export default Galeria