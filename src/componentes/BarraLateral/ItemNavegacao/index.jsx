import styled from "styled-components"

const ItemEstilizado = styled.li`
    align-items: center;
    column-gap: 1.125rem;
    display: flex;
`

const LinkEstilizado = styled.a`
    color: #D9D9D9;
    font-size: 1.5rem;
    line-height: normal;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} />
            <LinkEstilizado>{children}</LinkEstilizado>
        </ItemEstilizado>
    )
}

export default ItemNavegacao