<p align="center"> <img src="https://github.com/GabrielVeroneze/space-app/assets/95183901/cb713a42-33f4-41cf-83d5-9df0ffad05c6" style="border-radius: 20px"> </p>
<p>Projeto desenvolvido durante o curso "React: estilize componentes com Styled Components e manipule arquivos estáticos" da Alura.</p>

<hr>

## Índice

- [Descrição](#descricao)
- [Funcionalidades e Recursos](#toolbox-funcionalidades-e-recursos)
   - [Página Inícial](#página-inícial)
   - [Recursos de Interatividade](#recursos-de-interatividade)
   - [Filtros e Busca](#filtros-e-busca)
   - [Navegação](#navegação)
   - [Recursos Utilizados](#recursos-utilizados)
   - [Responsividade](#responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#demonstração-visual)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/900fd7ea-e4a4-41a7-ab64-c964bd2b5072"></h1>
<p align="center">O Space App é um catálogo de imagens do espaço, nele os usuários podem explorar imagens do universo de forma eficiente e conveniente. A aplicação oferece diversas funcionalidades para tornar a experiência do usuário mais envolvente e informativa.</p>

## :toolbox: Funcionalidades e Recursos

### Página Inícial

- `Imagens`: Possui uma coleção de imagens do espaço, incluindo estrelas, galáxias, planetas e outros objetos celestes.

- `Galeria`: Mostra imagens do espaço na seção de galeria, onde cada imagem é apresentada com seu título e fonte. Isso permite aos usuários obter informações contextuais sobre as imagens à medida que as exploram.

- `Populares`: Exibe uma seleção das fotos mais populares do espaço. Apesar de ter o botão "Ver mais", ele não possui funcionalidade implementada.

### Recursos de Interatividade

- `Favoritar Imagem`: Permite que o usuário marque suas imagens favoritas. Basta clicar no ícone de coração associado a essa imagem.

- `Ampliar Imagem`: Utiliza um modal para expandir a imagem. Permitindo o usuário ver a imagem em sua totalidade e examinar os detalhes.

### Filtros e Busca

- `Filtragem por Título`: A aplicação permite aos usuários filtrar imagens com base em seus títulos. Basta usar o campo de entrada de pesquisa para encontrar imagens específicas por título.

- `Filtragem por Tags`: Você também pode filtrar imagens por tags, como estrelas, galáxias, planetas e outros objetos celestes. Isso facilita a busca por imagens relacionadas a categorias específicas.

### Navegação

- `Barra Lateral`: A barra lateral oferece uma navegação fácil entre as páginas da aplicação (atualmente, apenas a página inicial está disponível). Isso torna a experiência do usuário mais intuitiva e permite futuras expansões do projeto.

### Recursos Utilizados

- `Componentes Estilizados`: O `Styled Components` é utilizado para estilizar componentes de forma eficaz, maximizando o uso de JavaScript para uma estilização dinâmica.

- `Layouts Avançados`: A aplicação utiliza conceitos como `Flexbox` e `Grid` para layouts responsivos e avançados.

- `Arquivos Estáticos`: A aplicação explora a manipulação de arquivos estáticos, incluindo imagens, fontes e arquivos JSON. 

- `Modal Semântico`: O modal é criado utilizando componentes semânticos do HTML, como o elemento `<dialog>`, para fornecer uma visualização de imagens ampliada.

- `Integração Dinâmica`: Integra os dados dos arquivos JSON com o estado do `React`, permitindo a exibição dinâmica de imagens e seus caminhos.

### Responsividade

- `Media queries`: Implementa `Media Queries` com o intuito de aplicar responsividade à aplicação, adaptando-se a diferentes tamanhos de tela. Ele mantém uma experiência de usuário agradável em dispositivos móveis, tablets e desktops.

## :computer: Ferramentas utilizadas

| &nbsp; React | &nbsp; Vite | Styled Components | 
| ------------ | ----------- | ----------------- |
<img height="65px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="65px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/6810d45b-69d9-4282-a255-f4afa9c06f54"> | &nbsp; &nbsp; <img height="100px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/17447cac-f50e-4b9a-91bf-52617c28a16f">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/space-app/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/space-app.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd meu-projeto
   ```
3. Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:
   ```
   npm install
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso irá instalar todas as dependências listadas no arquivo package.json.

4. Após a instalação das dependências, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm run dev
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.
<br>

## Demonstração Visual
`Página Inícial`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/d1c29281-76ef-4eb5-9e2c-cfd3cfbf166b)

`Filtrando por Tags`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/0aaeee2b-b55c-40b2-83ff-9297ec7e0366)

`Filtrando por Título`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/444c6b1c-f953-40ac-8d83-bb5767236417)

`Favoritando Imagem`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/ca4c360b-2c46-47a4-9c14-36c30acdc32a)

`Ampliando Imagem`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/f3c1710d-9f9e-49a3-8490-3acc847f8497)
