import styled from "styled-components"

const FigureEstilizada = styled.figure`
    align-items: center;
    background: url(${props => props.$imagem}) center / cover no-repeat;
    border-radius: 20px;
    display: flex;
    flex-grow: 1;
    height: 328px;
    margin: 0;
    padding: 0 4rem;
`

const TituloEstilizado = styled.h1`
    color: #FFF;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    min-width: 266px;
    width: 29.5%;
`

const Banner = ({ imagemFundo, texto }) => {
    return (
        <FigureEstilizada $imagem={imagemFundo}>
            <TituloEstilizado>
                {texto}
            </TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner