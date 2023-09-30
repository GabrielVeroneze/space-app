import styled from 'styled-components'
import tags from './tags.json'

const TagsEstilizada = styled.section`
    align-items: center;
    display: flex;
    gap: 1.5rem;
    grid-area: tags;
    flex-wrap: wrap;
    margin-top: 1rem;

    @media screen and (max-width: 1024px) {
        gap: 1rem;
        margin-top: 0.5rem;
    }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    width: 212px;

    @media screen and (max-width: 1024px) {
        width: auto;
    }
`

const BotaoEstilizado = styled.button`
    color: #FFF;
    border: 2px solid;
    border-color: ${props => props.$ativo ? '#C98CF1' : 'transparent'};
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.30);
    cursor: pointer;
    font-size: 1.5rem;
    line-height: normal;
    padding: 0.5rem;

    @media screen and (max-width: 1024px) {
        min-width: 82px;
        padding: 0.5rem 0.25rem;
    }
`

const Tags = ({ tag, setTag }) => {    
    return (
        <TagsEstilizada>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(dados => (
                <BotaoEstilizado
                    key={dados.id}
                    $ativo={dados.tag === tag}
                    onClick={() => setTag(dados.tag)}
                >
                    {dados.titulo}
                </BotaoEstilizado>
            ))}
        </TagsEstilizada>
    )
}

export default Tags