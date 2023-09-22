import styled from "styled-components"

const Titulo = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

export default Titulo