import { useEffect, useState } from "react"
import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"
import fotos from './fotos.json'

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`

const AppContainer = styled.div`
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 100%;
    width: 1440px;
`

const MainContainer = styled.main`
    display: flex;
    gap: 1.5rem;
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 2.5rem;
`

const App = () => {
    const [fotosGaleria, setFotosGaleria] = useState(fotos)
    const [fotoModal, setFotoModal] = useState(null)
    const [tag, setTag] = useState(0)
    const [filtro, setFiltro] = useState('')

    useEffect(() => {
        const fotosFiltradas = fotos.filter(foto => {
            const filtroPorTag = !tag || foto.tagId === tag;
            const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
            
            return filtroPorTag && filtroPorTitulo
        })

        setFotosGaleria(fotosFiltradas)
    }, [filtro, tag])

    const aoAlternarFavorito = (fotoFavorita) => {
        if(fotoFavorita.id === fotoModal?.id) {
            setFotoModal({
                ...fotoModal,
                favorito: !fotoModal.favorito
            })
        }

        setFotosGaleria(
            fotosGaleria.map(foto => ({
                ...foto,
                favorito: foto.id === fotoFavorita.id ? !fotoFavorita.favorito : foto.favorito
            }))
        )
    }

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho setFiltro={setFiltro} />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner
                            imagemFundo="imagens/foto-destaque.png"
                            texto="A galeria mais completa de fotos do espaço!"
                        />
                        <Galeria
                            fotos={fotosGaleria}
                            aoFotoSelecionada={foto => setFotoModal(foto)}
                            aoAlternarFavorito={aoAlternarFavorito}
                            tag={tag}
                            setTag={setTag}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom
                foto={fotoModal}
                aoFechar={() => setFotoModal(null)}
                aoAlternarFavorito={aoAlternarFavorito}
            />
            <Rodape />
        </FundoGradiente>
    )
}

export default App
