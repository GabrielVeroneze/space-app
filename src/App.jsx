import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`

const App = () => {

    return (
        <FundoGradiente>
            <EstilosGlobais />
        </FundoGradiente>
    )
}

export default App
