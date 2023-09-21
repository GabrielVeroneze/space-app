import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`

const Grid = styled.div`
    display: grid;
    gap: 0 1.5rem;
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
        'barra-lateral banner';
`

const App = () => {

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <Cabecalho />
            <Grid>
                <BarraLateral />
                <Banner
                    imagemFundo="imagens/foto-destaque.png"
                    texto="A galeria mais completa de fotos do espaço!"
                />
            </Grid>
        </FundoGradiente>
    )
}

export default App
