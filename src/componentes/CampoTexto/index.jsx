import styled from "styled-components"
import search from "./search.svg"

const ContainerEstilizado = styled.div`
    align-self: center;
    display: flex;
    position: relative;
    width: 602px;
`

const InputEstilizado = styled.input`
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    color: #D9D9D9;
    font-size: 1.25rem;
    height: 60px;
    line-height: 1.25rem;
    outline: none;
    padding: 0.75rem 1rem;
    width: 100%;
`

const IconeLupa = styled.img`
    align-self: center;
    position: absolute;
    right: 18px;
`

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizado>
            <InputEstilizado
                placeholder="O que você procura?"
                onChange={evento => setFiltro(evento.target.value)}
            />
            <IconeLupa src={search} alt="Ícone de Lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto