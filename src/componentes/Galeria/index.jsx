import styled from "styled-components"
import Tags from "./Tags"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Imagem from "./Imagem"

const LayoutGaleria = styled.div`
    display: flex;
    gap: 1.5rem;
`

const GaleriaContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1.5rem;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <LayoutGaleria>
                <GaleriaContainer>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => (
                            <Imagem
                                key={foto.id}
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                foto={foto}
                            />
                        ))}
                    </ImagensContainer>
                </GaleriaContainer>
                <Populares />
            </LayoutGaleria>
        </>
    )
}

export default Galeria