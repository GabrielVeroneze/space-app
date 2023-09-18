import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`

const App = () => {

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <Cabecalho />
        </FundoGradiente>
    )
}

export default App
