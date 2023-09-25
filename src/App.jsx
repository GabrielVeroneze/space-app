import { useState } from "react"
import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import ModalZoom from "./componentes/ModalZoom"
import fotos from './fotos.json'

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`

const AppContainer = styled.div`
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 100%;
    width: 1440px;
`

const MainContainer = styled.main`
    display: flex;
    gap: 1.5rem;
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2.5rem;
`

const App = () => {
    const [fotosGaleria, setFotosGaleria] = useState(fotos)
    const [fotoModal, setFotoModal] = useState(null)

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner
                            imagemFundo="imagens/foto-destaque.png"
                            texto="A galeria mais completa de fotos do espaço!"
                        />
                        <Galeria
                            fotos={fotosGaleria}
                            aoFotoSelecionada={foto => setFotoModal(foto)}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom foto={fotoModal} />
        </FundoGradiente>
    )
}

export default App
