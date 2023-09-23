import styled from "styled-components"

const FigureEstilizada = styled.figure`
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    height: 336px;
    overflow: hidden;
    width: 448px;
`

const CaptionEstilizada = styled.figcaption`
    background-color: #001634;
    padding: 1rem 1rem 1rem 1.375rem;
`

const TituloEstilizado = styled.h3`
    color: #FFF;
    font-family: 'GandhiSans-Bold';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`

const ContainerEstilizado = styled.div`
    display: flex;
    gap: 1.5rem;
`

const TextoEstilizado = styled.p`
    color: #FFF;
    flex-grow: 1;
    line-height: normal;
    margin: 0;
`

const Icone = styled.button`
    border: none;
    background: url(${props => props.$imagem}) center / 20px no-repeat;
    height: 24px;
    padding: 0;
    width: 24px;
`

const Imagem = ({ titulo, fonte, path }) => {
    return (
        <FigureEstilizada>
            <img src={path} />
            <CaptionEstilizada>
                <TituloEstilizado>{titulo}</TituloEstilizado>
                <ContainerEstilizado>
                    <TextoEstilizado>{fonte}</TextoEstilizado>
                    <Icone $imagem="icones/favorito-inativo.svg"></Icone>
                    <Icone $imagem="icones/expandir.svg"></Icone>
                </ContainerEstilizado>
            </CaptionEstilizada>
        </FigureEstilizada>
    )
}

export default Imagem