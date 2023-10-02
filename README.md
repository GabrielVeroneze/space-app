<p align="center"> <img src="https://imgur.com/QDt4Sby.png" alt="React: estilize componentes com Styled Components e manipule arquivos estáticos"> </p>
<p>Projeto desenvolvido durante o curso "React: estilize componentes com Styled Components e manipule arquivos estáticos" da Alura.</p>

<hr>

## Índice

- [Descrição](#descrição)
- [Funcionalidades e Recursos](#toolbox-funcionalidades-e-recursos)
   - [Páginas Principais](#páginas-principais)
      - [Login](#login)
      - [Feira](#feira)
      - [Carrinho](#carrinho)
   - [Gerenciamento de Estado](#gerenciamento-de-estado)
   - [Roteamento](#roteamento)
   - [Boas Práticas e Responsividade](#boas-práticas-e-responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#demonstração-visual)

<h1 align="center" id="descrição"><img src="https://github.com/GabrielVeroneze/space-app/assets/95183901/900fd7ea-e4a4-41a7-ab64-c964bd2b5072"></h1>
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

| React | Vite | Styled Components | 
| ----- | ---- | ----------------- |
<img height="65px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="65px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/6810d45b-69d9-4282-a255-f4afa9c06f54"> | <img height="100px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/17447cac-f50e-4b9a-91bf-52617c28a16f">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/feira-virtual/archive/refs/heads/master.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/feira-virtual.git
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
   npm start
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso abrirá automaticamente a aplicação no navegador. Se não abrir, acesse o endereço http://localhost:3000.
<br>

## Demonstração Visual
`Inserindo Dados`
![Feira Virtual](https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/aa4faeaf-5598-43c7-a439-718252d88fb0)

`Adicionando Produtos`
![Feira Virtual](https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/456eef8d-bf8c-4262-983f-b61fa6be8770)

`Selecionando Opção de Pagamento`
![Feira Virtual](https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/41586a2d-d20c-423b-b5ce-8ca489107900)

`Efetuando Compra`
![Feira Virtual](https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/c79b73d7-f17f-4c73-a37f-d2c0f019a169)
