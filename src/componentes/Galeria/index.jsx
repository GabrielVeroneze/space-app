import styled from "styled-components"
import Tags from "./Tags"
import Titulo from "../Titulo"
import Populares from "./Populares"

const LayoutGaleria = styled.div`
    display: flex;
`

const GaleriaContainer = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return (
        <>
            <Tags />
            <LayoutGaleria>
                <GaleriaContainer>
                    <Titulo>Navegue pela galeria</Titulo>

                </GaleriaContainer>
                <Populares />
            </LayoutGaleria>
        </>
    )
}

export default Galeria