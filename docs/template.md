# Template padrão do site

1. **Identidade Visual**:
   - O fundo do corpo (`body`) foi definido como `#f8f9fa`, uma cor neutra e suave que não distrai o conteúdo principal da página.
   - A barra de navegação (`navbar`) possui uma cor de fundo `#ffffff` para criar contraste com o restante do conteúdo e facilitar a leitura dos links.

2. **Responsividade**:
   - A barra de navegação é responsiva, expandindo os itens de menu para dispositivos de tela grande (`lg`) e exibindo um botão de menu para dispositivos menores.
   - O conteúdo (`container`) utiliza a classe `container` do Bootstrap para limitar a largura máxima e centralizar o conteúdo, garantindo uma boa experiência de leitura em telas maiores.

3. **Iconografia**:
   - Embora não tenha incluído ícones específicos no código, é possível adicionar ícones facilmente utilizando a biblioteca de ícones do Bootstrap ou ícones personalizados. Por exemplo, um ícone de usuário pode ser adicionado ao lado do nome do site na barra de navegação.

4. **Detalhes Adicionais**:
   - A fonte padrão do Bootstrap, que é Arial, foi utilizada para garantir uma aparência consistente em diferentes navegadores.
   - Os links na barra de navegação possuem uma cor padrão de `#000000` (preto), que ao passar o mouse (`hover`), muda para `#007bff` (azul), indicando interatividade.

Esses detalhes contribuem para criar uma interface visualmente agradável e funcional, mantendo a consistência e facilitando a usabilidade do site em diferentes dispositivos e tamanhos de tela.

## Design

1. **Layouts Utilizados**:
- **Página Inicial (index.html)**: Layout com campos de usuário, senha e botões para conectar, cadastrar novo usuário e recuperar senha. A barra de navegação padrão não será exibida nesta página.
- **Página de Registro de Novo Usuário (novousuario.html)**: Layout com campos de nome, email, senha e repetir senha, botões para cadastrar e cancelar.
- **Página de Recuperação de Senha (recuperacaosenha.html)**: Layout com campo de email e botões para enviar e cancelar.
- **Página de Bem-Vindo (bemvindo.html)**: Layout com barra de navegação horizontal fixa no topo, contendo opções para visualizar despesas, registrar receitas, registrar despesas, definir metas e emitir relatório. O conteúdo principal será exibido abaixo da barra de navegação.
- **Visualizar Despesas** (viewdespesas.html): A página terá uma visão detalhada e organizada de todas as despesas registradas. Haverá um menu horizontal fixo no topo da página com as opções: Visualizar Despesas, Registrar Receitas, Registrar Despesas, Definir Metas e Emitir Relatório. O menu será em formato de tabela em uma única linha, com um espaçamento maior entre as opções para melhorar a usabilidade.
- **Registrar Receitas** (registroreceitas.html): A página terá campos para o usuário registrar suas receitas, como nome da receita, valor, data, categoria, etc. Um botão de salvar ou enviar permitirá ao usuário confirmar o registro da receita.
- **Registrar Despesas** (registrodespesas.html): A página terá campos para o usuário registrar suas despesas, como nome da despesa, valor, data, categoria, etc. Um botão de salvar ou enviar permitirá ao usuário confirmar o registro da despesa.
- **Definir Metas** (metas.html): A página permitirá ao usuário definir metas financeiras, como economias mensais, objetivos de gastos, etc. Os campos incluirão descrição da meta, valor alvo, prazo, etc.
- **Emitir Relatório** (relatorio.html): A página permitirá ao usuário gerar relatórios financeiros com base nos dados registrados, como relatório de despesas por categoria, relatório de receitas mensais, etc. Opções de filtro e personalização estarão disponíveis para o usuário criar relatórios específicos.


2. **Logo do Sistema**:
- O logo do sistema será colocado no canto superior esquerdo da barra de navegação em todas as páginas. Será um elemento visual que identifica o sistema de forma rápida e clara.

3. **Barra de Navegação Padrão**:
- A barra de navegação padrão será utilizada em todas as páginas, exceto na página inicial (index.html), onde não será exibida.
- A barra de navegação conterá o logo do sistema no canto superior esquerdo e os seguintes menus:
     - **Visualizar Despesas**: Redireciona para a página de visualização detalhada das despesas (viewdespesas.html).
     - **Registrar Receitas**: Redireciona para a página de registro de receitas (registroreceitas.html).
     - **Registrar Despesas**: Redireciona para a página de registro de despesas (registrodespesas.html).
     - **Definir Metas**: Redireciona para a página de definição de metas (metas.html).
     - **Emitir Relatório**: Redireciona para a página de emissão de relatório (relatorio.html).

4. **Estilo Visual**:
- Utiliza cores suaves e limpas para criar uma identidade visual amigável.
- A barra de navegação terá uma cor de fundo clara para contrastar com o texto e destacar os menus.
- Utiliza ícones simples e intuitivos para acompanhar os menus da barra de navegação, facilitando a compreensão e a navegação do usuário.

5. **Responsividade**:
- Garantir que o design seja responsivo para se adaptar a diferentes dispositivos e tamanhos de tela.
- A barra de navegação será fixa no topo da página para facilitar o acesso aos menus em qualquer ponto da navegação.

Essa especificação define os principais elementos de design, layout e navegação para o sistema de controle financeiro, proporcionando uma experiência intuitiva e eficiente para o usuário.



## Cores

A seguir, está apresentada a especificação da paleta de cores a ser utilizada, onde o verde terá maior predominância.

1. **Verde Predominante**:
   - Cor Principal: #28a745 (Verde)
   - Utilizada em elementos de destaque, como botões principais, ícones de confirmação e mensagens de sucesso.

2. **Cores Complementares**:
   - Azul: #007bff
   - Amarelo: #ffc107
   - Vermelho: #dc3545
   - Cinza: #6c757d
   - Essas cores serão utilizadas em elementos de destaque, como botões secundários, avisos, ícones e barras de progresso.

3. **Cores de Fundo**:
   - Fundo Claro: #f8f9fa
   - Fundo Escuro: #343a40
   - Utilizadas em áreas de conteúdo para criar contraste e facilitar a leitura.

4. **Cores de Texto**:
   - Texto Principal: #212529
   - Texto Secundário: #6c757d
   - Utilizadas para garantir legibilidade e contraste adequado com o fundo.

5. **Gradient**:
   - Gradiente de Verde: de #28a745 (início) a #218838 (fim)
   - Utilizado em áreas de destaque e fundos de elementos específicos para adicionar dinamismo ao design.

Essa paleta de cores proporcionará uma experiência visual agradável e coesa, com o verde como cor principal transmitindo uma sensação de frescor e vitalidade associada à gestão financeira e ao crescimento.

## Tipografia

Apresente as fontes que serão utilizadas e sua função no site. As principais funções são: Título de página, Título de Seção, Rótulos de componentes e Corpo de Texto.


## Iconografia

Defina os ícones que serão utilizados e suas respectivas funções.

Apresente os estilos CSS criados para cada um dos elementos apresentados.
Outras seções podem ser adicionadas neste documento para apresentar padrões de componentes, de menus, etc.


> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
