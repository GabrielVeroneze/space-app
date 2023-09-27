import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    inset: 0;
    position: fixed;
`

const ModalEstilizado = styled.dialog`
    background: none;
    border: none;
    max-width: 1156px;
    padding: 0;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 80.25vw;

    form > button { 
        position: absolute;
        right: 24px;
        top: 24px;
    }
`

const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <ModalEstilizado open={foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <BotaoIcone>
                            <img src="/icones/fechar.svg" alt="Ícone de fechar" />
                        </BotaoIcone>
                    </form>
                </ModalEstilizado>    
            </>}
        </>
    )
}

export default ModalZoom