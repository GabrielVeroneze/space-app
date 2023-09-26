import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    inset: 0;
    position: fixed;
`

const ModalEstilizado = styled.dialog`
    background: none;
    border: none;
    padding: 0;
    position: fixed;
    top: 294px;
    width: 90vw;
    margin: 0 auto;
    height: 740px;
`

const ModalZoom = ({ foto }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <ModalEstilizado open={foto}>
                    <Imagem {...foto} expandida={true} />
                </ModalEstilizado>    
            </>}
        </>
    )
}

export default ModalZoom