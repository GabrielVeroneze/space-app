import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.8125rem 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="icones/home-ativo.svg"
                        iconeInativo="icones/home-inativo.svg"
                        ativo
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="icones/vistas-ativo.svg"
                        iconeInativo="icones/vistas-inativo.svg"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="icones/curtidas-ativo.svg"
                        iconeInativo="icones/curtidas-inativo.svg"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="icones/novas-ativo.svg"
                        iconeInativo="icones/novas-inativo.svg"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="icones/surpreenda-ativo.svg"
                        iconeInativo="icones/surpreenda-inativo.svg"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral