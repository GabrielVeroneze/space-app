import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    display: flex;
    gap: 0 1.5rem;
    justify-content: space-between;
    padding: 3.75rem 0 4rem;

    img {
        height: auto;
        max-width: 212px;
    }
`

const Cabecalho = ({ setFiltro }) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Logo do Space App" />
            <CampoTexto setFiltro={setFiltro} />
        </HeaderEstilizado>
    )
}

export default Cabecalho