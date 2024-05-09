# Testes

No projeto em questão, serão conduzidos dois tipos de testes:

1. **Teste de Software (Caixa Preta):**
   - **Abordagem:** Caixa Preta
   - **Objetivo:** Verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
   - **Descrição:** Este tipo de teste foca na validação externa do sistema, sem acessar diretamente seu código-fonte. Os testes são realizados com base nos requisitos especificados, verificando se as funcionalidades estão de acordo com o esperado e se os aspectos não funcionais, como desempenho e segurança, são atendidos.

2. **Teste de Usabilidade:**
   - **Objetivo:** Avaliar a qualidade do uso do sistema por um usuário do público-alvo.
   - **Descrição:** O teste de usabilidade visa identificar a facilidade de uso, eficiência e satisfação do usuário ao interagir com o sistema. São considerados aspectos como a navegabilidade, clareza das informações, intuitividade das interfaces e a experiência geral do usuário ao realizar tarefas no sistema.

Ambos os tipos de testes são essenciais para garantir a qualidade e a adequação do sistema às necessidades e expectativas dos usuários finais.

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software


**Caso de Teste** | **CT01 - Validar o conteúdo e a funcionalidade do botão de login na página inicial (index.html) da Gerency.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) do sistema Gerency. <br> 2) Verifique se as informações sobre a Gerency estão corretamente exibidas no home, como nome, slogan e descrição breve do sistema. <br> 3) Procure pelo botão de login na página. <br> 4) Clique no botão de login.
**Requisitos associados** | RF-007 / Página Index - Conheça a Gerency
**Resultado esperado** | - As informações sobre a Gerency, como nome, slogan e descrição breve, devem estar corretamente apresentadas e formatadas na página inicial. <br>  - O botão de login deve ser visível e clicável, permitindo que o usuário acesse o sistema ao clicar nele.
**Dados de entrada** | - Acesso à página inicial (index.html) da Gerency. <br> - Clique no botão de login.
**Resultado obtido** | Sucesso. <br> - As informações sobre a Gerency estão corretamente exibidas e formatadas na página inicial. <br> - O botão de login é visível e clicável, direcionando o usuário para a página de login ao ser clicado.

**Caso de Teste** | **CT02 - Validar o scroll automático ao clicar nas páginas do menu de navegação na Gerency.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) da Gerency. <br> 2) Observe o menu de navegação no topo da página. <br> 3) Clique em cada uma das páginas do menu de navegação: Home, Sobre nós, Contato. <br> 4) Verifique se o scroll automático ocorre ao clicar em cada página do menu, levando o usuário para a área correspondente da página.
**Requisitos associados** | RF-007 / Página Index - Conheça a Gerency
**Resultado esperado** | - Ao clicar em uma das páginas do menu de navegação (Home, Sobre nós, Contato), o scroll automático deve ser ativado. <br> - O scroll automático deve levar o usuário para a área correspondente da página, permitindo que ele visualize cada seção de forma clara e intuitiva.
**Dados de entrada** | - Acesso à página inicial (index.html) da Gerency. <br> - Clique em cada página do menu de navegação: Home, Sobre nós, Contato.
**Resultado obtido** | Sucesso. <br> - O scroll automático é ativado corretamente ao clicar nas páginas do menu de navegação. <br> - Ao clicar em cada página, o usuário é direcionado para a área correspondente da página, facilitando a visualização das diferentes seções do sistema.

**Caso de Teste** | **CT03 - Validar a funcionalidade do formulário de login (login.html) na Gerency.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de login (login.html) da Gerency. <br> 2) Insira um usuário válido (email ou nome de usuário) e senha correta nos campos correspondentes. <br> 3) Clique no botão "Conectar" para realizar o login. <br> 4) Verifique se o sistema aceita as credenciais corretas e redireciona o usuário para a página bemvindo.html após o login. <br> 5) Tente realizar o login novamente, desta vez inserindo um usuário inválido ou uma senha incorreta. <br> 6) Verifique se o sistema exibe uma mensagem de erro adequada quando as credenciais são inválidas.
**Requisitos associados** | RF-007 / Login de Usuário
**Resultado esperado** | - O sistema deve permitir o login com credenciais válidas, redirecionando o usuário para a página bemvindo.html. <br> - Caso as credenciais sejam inválidas, o sistema deve exibir uma mensagem de erro apropriada ao usuário.
**Dados de entrada** | - Usuário (email ou nome de usuário) e senha válidos para login. <br> - Usuário (email ou nome de usuário) e senha inválidos para login.
**Resultado obtido** | Sucesso. <br> - O login é realizado com sucesso quando as credenciais são válidas, e o usuário é redirecionado para a página bemvindo.html. <br> - Ao inserir credenciais inválidas, o sistema exibe uma mensagem de erro indicando que as credenciais são inválidas.

**Caso de Teste** | **CT04 - Validar os campos obrigatórios (Usuário e Senha) e o redirecionamento para a página (home.html) após o login bem-sucedido no sistema "Gerency".**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de login (login.html) do sistema Gerency. <br> 2) Deixe os campos de usuário e senha em branco e tente realizar o login. <br> 3) Verifique se o sistema exibe mensagens de erro indicando que os campos são obrigatórios. <br> 4) Insira um usuário válido (email ou nome de usuário) e uma senha correta nos campos correspondentes. <br> 5) Clique no botão "Conectar" para realizar o login. <br> 6) Verifique se o sistema redireciona o usuário para a página home.html após o login bem-sucedido.
**Requisitos associados** | RF-007 / Login de Usuário
**Resultado esperado** | - O sistema deve exibir mensagens de erro indicando que os campos de usuário e senha são obrigatórios caso eles estejam em branco. <br> - Após inserir credenciais válidas e clicar em "Conectar", o sistema deve redirecionar o usuário para a página home.html.
**Dados de entrada** | - Campos de usuário e senha em branco. <br> - Usuário (email ou nome de usuário) e senha válidos para login.
**Resultado obtido** | Sucesso. <br> - O sistema exibe mensagens de erro quando os campos obrigatórios não são preenchidos. <br> - Após o login bem-sucedido, o sistema redireciona o usuário para a página home.html conforme esperado.

**Caso de Teste** | **CT05 - Validar o cadastro de novo usuário no sistema "Gerency".**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de cadastro de novo usuário (novousuario.html) do sistema Gerency. <br> 2) Deixe os campos de nome, email, senha e confirmação de senha em branco e tente realizar o cadastro. <br> 3) Verifique se o sistema exibe mensagens de erro indicando que os campos são obrigatórios. <br> 4) Preencha todos os campos com informações válidas, exceto a confirmação de senha. <br> 5) Verifique se o sistema exibe uma mensagem de erro indicando que a confirmação de senha é necessária. <br> 6) Preencha todos os campos com informações válidas, incluindo a confirmação de senha, mas com senhas diferentes. <br> 7) Verifique se o sistema exibe uma mensagem de erro indicando que as senhas não coincidem. <br> 8) Preencha todos os campos com informações válidas, incluindo a confirmação de senha correta. <br> 9) Clique no botão "Cadastrar" para realizar o cadastro. <br> 10) Verifique se o sistema redireciona o usuário para a página de login (login.html) após o cadastro bem-sucedido.
**Requisitos associados** | RF-006 / Cadastro de Novo Usuário
**Resultado esperado** | - O sistema deve exibir mensagens de erro indicando que os campos de cadastro são obrigatórios se estiverem em branco. <br> - Após preencher corretamente todos os campos e clicar em "Cadastrar", o sistema deve redirecionar o usuário para a página de login.
**Dados de entrada** | - Campos de cadastro (nome, email, senha e confirmação de senha) em branco. <br> - Campos de cadastro preenchidos com informações válidas, mas sem a confirmação de senha. <br> - Campos de cadastro preenchidos com informações válidas, incluindo a confirmação de senha incorreta. <br> - Campos de cadastro preenchidos com informações válidas, incluindo a confirmação de senha correta.
**Resultado obtido** | Sucesso. <br> - O sistema exibe mensagens de erro quando os campos obrigatórios não são preenchidos e quando a confirmação de senha não coincide. <br> - Após o cadastro bem-sucedido, o sistema redireciona o usuário para a página de login conforme esperado.

**Caso de Teste** | **CT06 - Validar os campos no formulário de cadastro de novo usuário no sistema "Gerency".**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de cadastro de novo usuário (novousuario.html) do sistema Gerency. <br> 2) Insira um nome válido no campo "Nome" (ex: João da Silva). <br> 3) Insira um email válido no campo "Email" (ex: joao.silva@email.com). <br> 4) Insira uma senha com menos de 6 caracteres no campo "Senha" (ex: 12345). <br> 5) Insira uma confirmação de senha que não coincida com a senha no campo "Confirmação de Senha" (ex: 54321). <br> 6) Clique no botão "Cadastrar" para submeter o formulário. <br> 7) Verifique se o sistema exibe mensagens de erro indicando que os dados inseridos são inválidos conforme os critérios estabelecidos. <br> 8) Insira uma senha com 6 caracteres ou mais no campo "Senha" (ex: 123456). <br> 9) Insira a mesma senha no campo "Confirmação de Senha" (123456). <br> 10) Clique no botão "Cadastrar" para submeter o formulário novamente. <br> 11) Verifique se o sistema permite o cadastro do novo usuário após preencher corretamente todos os campos.
**Requisitos associados** | RF-006 / Cadastro de Novo Usuário
**Resultado esperado** | - O sistema deve exibir mensagens de erro indicando que os dados inseridos são inválidos se não atenderem aos critérios estabelecidos. <br> - Após preencher corretamente todos os campos conforme os critérios, o sistema deve permitir o cadastro do novo usuário.
**Dados de entrada** | - Nome válido. <br> - Email válido. <br> - Senha com menos de 6 caracteres. <br> - Confirmação de senha que não coincide com a senha. <br> - Senha com 6 caracteres ou mais. <br> - Confirmação de senha que coincide com a senha.
**Resultado obtido** | Sucesso. <br> - O sistema exibe mensagens de erro quando os dados inseridos não atendem aos critérios estabelecidos. <br> - Após preencher corretamente todos os campos conforme os critérios, o sistema permite o cadastro do novo usuário conforme esperado.

**Caso de Teste** | **CT07 - Validar o envio de email de confirmação após o cadastro de novo usuário no sistema "Gerency".**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de cadastro de novo usuário (novousuario.html) do sistema Gerency. <br> 2) Preencha todos os campos obrigatórios do formulário corretamente (nome, email, senha, confirmação de senha). <br> 3) Clique no botão "Cadastrar" para submeter o formulário. <br> 4) Verifique se o sistema exibe uma mensagem de confirmação informando que o cadastro foi realizado com sucesso. <br> 5) Verifique se o sistema envia automaticamente um email de confirmação para o endereço de email fornecido durante o cadastro.
**Requisitos associados** | RF-006 / Cadastro de Novo Usuário
**Resultado esperado** | - O sistema deve exibir uma mensagem de confirmação após o cadastro bem-sucedido. <br> - O sistema deve enviar automaticamente um email de confirmação para o endereço de email fornecido durante o cadastro.
**Dados de entrada** | - Nome válido. <br> - Email válido. <br> - Senha válida. <br> - Confirmação de senha que coincide com a senha.
**Resultado obtido** | Sucesso. <br> - O sistema exibe a mensagem de confirmação após o cadastro bem-sucedido. <br> - Um email de confirmação é enviado para o endereço de email fornecido durante o cadastro.

**Caso de Teste** | **CT08 - Validar a recuperação de senha no sistema "Gerency".**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de recuperação de senha (recuperarsenha.html) do sistema Gerency. <br> 2) Preencha o campo de email com o endereço de email associado à conta do usuário que deseja recuperar a senha. <br> 3) Clique no botão "Recuperar Senha" para submeter o formulário. <br> 4) Verifique se o sistema exibe uma mensagem informando que um email de recuperação de senha foi enviado para o endereço de email fornecido.
**Requisitos associados** | RF-006 / Recuperação de Senha
**Resultado esperado** | - O sistema deve enviar automaticamente um email de recuperação de senha para o endereço de email fornecido pelo usuário.
**Dados de entrada** | - Endereço de email válido associado à conta do usuário.
**Resultado obtido** | Sucesso. <br> - O sistema exibe uma mensagem informando que um email de recuperação de senha foi enviado para o endereço de email fornecido.

**Caso de Teste** | **CT09 - Validar o campo de email e envio de email para recuperação de senha.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página de recuperação de senha (recuperarsenha.html) do sistema Gerency. <br> 2) Deixe o campo de email em branco e tente enviar o formulário clicando no botão "Recuperar Senha". <br> 3) Verifique se o sistema exibe uma mensagem de erro informando que o campo de email é obrigatório. <br> 4) Insira um endereço de email válido associado à conta do usuário que deseja recuperar a senha. <br> 5) Clique no botão "Recuperar Senha" para submeter o formulário. <br> 6) Verifique se o sistema exibe uma mensagem informando que um email de recuperação de senha foi enviado para o endereço de email fornecido.
**Requisitos associados** | RF-006 / Recuperação de Senha
**Resultado esperado** | - O sistema deve validar o campo de email e enviar automaticamente um email de recuperação de senha para o endereço de email fornecido pelo usuário.
**Dados de entrada** | - Endereço de email válido associado à conta do usuário.
**Resultado obtido** | Sucesso. <br> - O sistema valida corretamente o campo de email, exibindo uma mensagem de erro se estiver em branco, e envia um email de recuperação de senha para o endereço de email fornecido pelo usuário.

**Caso de Teste** | **CT10 - Validar o menu hamburguer na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Verifique se o menu hamburguer está presente no canto superior esquerdo da página. <br> 3) Clique no ícone do menu hamburguer para expandir as opções do menu. <br> 4) Verifique se as opções do menu são: Home, Historico e Metas. <br> 5) Clique em cada uma das opções do menu e verifique se são redirecionadas para as páginas correspondentes.
**Requisitos associados** | RF-001 / Página Home
**Resultado esperado** | - O menu hamburguer deve estar presente e funcional na página Home, contendo as opções mencionadas e redirecionando corretamente para as respectivas páginas.
**Dados de entrada** | - Clique no ícone do menu hamburguer e em cada uma das opções do menu.
**Resultado obtido** | Sucesso. <br> - O menu hamburguer está presente na página Home, contendo as opções mencionadas e redirecionando corretamente para as respectivas páginas ao serem clicadas.

**Caso de Teste** | **CT11 - Validar a centralização do nome do sistema "Gerency" na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Verifique se o nome do sistema "Gerency" está centralizado na página.
**Requisitos associados** | RF-001 / Página Home
**Resultado esperado** | - O nome do sistema "Gerency" deve estar centralizado na página Home, proporcionando uma apresentação visualmente equilibrada.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - O nome do sistema "Gerency" está centralizado na página Home, atendendo ao requisito de design especificado.

**Caso de Teste** | **CT12 - Validar o ícone de usuário logado no canto superior direito da página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Verifique se há um ícone representando o usuário logado no canto superior direito da página.
**Requisitos associados** | RF-001 / Página Home
**Resultado esperado** | - Deve haver um ícone representando o usuário logado no canto superior direito da página Home, indicando que o usuário está autenticado no sistema.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - O ícone de usuário logado está presente no canto superior direito da página Home, conforme o requisito especificado.

**Caso de Teste** | **CT13 - Validar a exibição dos retângulos (Saldo, Receitas, Despesas) e dos botões de acesso às páginas Histórico e Metas na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Verifique se há três retângulos visíveis na página, representando Saldo, Receitas e Despesas. <br> 3) Verifique se há botões de acesso à página Histórico e à página Metas logo abaixo dos retângulos.
**Requisitos associados** | RF-001 / Página Home
**Resultado esperado** | - Devem estar visíveis três retângulos na página Home, representando Saldo, Receitas e Despesas. <br> - Deve haver dois botões de acesso, um para a página Histórico e outro para a página Metas, logo abaixo dos retângulos.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - Os três retângulos (Saldo, Receitas, Despesas) estão visíveis na página Home. <br> - Os botões de acesso à página Histórico e à página Metas estão implementados e funcionais.

**Caso de Teste** | **CT14 - Validar a funcionalidade de filtragem dos relatórios por meio dos botões de lançamento na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Desça até o final da página para encontrar o retângulo com os relatórios. <br> 3) Verifique se existem botões de lançamento para filtrar os relatórios por diferentes períodos (ex: diário, semanal, mensal). <br> 4) Clique em um dos botões de lançamento para aplicar o filtro nos relatórios.
**Requisitos associados** | RF-001 / Página Home
**Resultado esperado** | - Devem existir botões de lançamento para filtrar os relatórios por diferentes períodos. <br> - Ao clicar em um dos botões de lançamento, os relatórios devem ser filtrados de acordo com o período selecionado.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - Os botões de lançamento para filtragem dos relatórios estão presentes. <br> - Ao clicar em um botão de lançamento, os relatórios são filtrados conforme o período selecionado.

**Caso de Teste** | **CT15 - Validar o funcionamento do modal para registro de receitas na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Localize e clique no botão com o ícone "+" para adicionar uma nova receita. <br> 3) O modal para registro de receitas deve abrir. <br> 4) Preencha os campos necessários, como valor da receita, categoria, data e descrição (opcional). <br> 5) Submeta o formulário no modal para salvar a nova receita.
**Requisitos associados** | RF-002 / Página Home - Registro de Receitas, Despesas e Metas
**Resultado esperado** | - O botão "+" de receitas abre o modal correspondente. <br> - O modal possui campos para inserção das informações da nova receita. <br> - Após preenchimento e submissão do formulário, a nova receita deve ser salva corretamente.
**Dados de entrada** | - Valor da receita, categoria, data, descrição (opcional).
**Resultado obtido** | Sucesso. <br> - O botão "+" de receitas abriu o modal. <br> - O modal de receitas possui campos adequados para inserção de informações. <br> - A nova receita foi salva corretamente após preenchimento e submissão do formulário.

**Caso de Teste** | **CT16 - Validar o funcionamento do modal para registro de despesas na página Home.**
 :--------------: | ------------
**Procedimento**  |1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Localize e clique no botão com o ícone "+" para adicionar uma nova despesa. <br> 3) O modal para registro de despesas deve abrir. <br> 4) Preencha os campos necessários, como valor da despesa, categoria, data e descrição (opcional). <br> 5) Submeta o formulário no modal para salvar a nova despesa.
**Requisitos associados** | RF-002 / Página Home - Registro de Receitas, Despesas e Metas
**Resultado esperado** | - O botão "+" de despesas abre o modal correspondente. <br> - O modal possui campos para inserção das informações da nova despesa. <br> - Após preenchimento e submissão do formulário, a nova despesa deve ser salva corretamente.
**Dados de entrada** | - Valor da despesa, categoria, data, descrição (opcional).
**Resultado obtido** | Sucesso. <br> - O botão "+" de despesas abriu o modal. <br> - O modal de despesas possui campos adequados para inserção de informações. <br> - A nova despesa foi salva corretamente após preenchimento e submissão do formulário.

**Caso de Teste** | **CT17 - Validar o funcionamento do modal para registro de metas na página Home.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Home (home.html) do sistema Gerency. <br> 2) Localize e clique no botão com o ícone "+" para adicionar uma nova meta. <br> 3) O modal para registro de metas deve abrir. <br> 4) Preencha os campos necessários, como valor da meta, categoria, data limite e descrição (opcional). <br> 5) Submeta o formulário no modal para salvar a nova meta.
**Requisitos associados** | RF-002 / Página Home - Registro de Receitas, Despesas e Metas
**Resultado esperado** | - O botão "+" de metas abre o modal correspondente. <br> - O modal possui campos para inserção das informações da nova meta. <br> - Após preenchimento e submissão do formulário, a nova meta deve ser salva corretamente.
**Dados de entrada** | - Valor da meta, categoria, data limite, descrição (opcional).
**Resultado obtido** | Sucesso. <br> - O botão "+" de metas abriu o modal. <br> - O modal de metas possui campos adequados para inserção de informações. <br> - A nova meta foi salva corretamente após preenchimento e submissão do formulário.

**Caso de Teste** | **CT18 - Validar a visualização detalhada de despesas na página Histórico.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Histórico (histórico.html) do sistema Gerency. <br> 2) Verifique se as despesas registradas estão apresentadas em uma tabela organizada. <br> 3) Confira se cada despesa está detalhada com informações como data, descrição, categoria e valor. <br> 4) Verifique se é possível filtrar as despesas por período ou categoria.
**Requisitos associados** | RF-008 / Página Histórico - Visualização Detalhada de Despesas e Receitas
**Resultado esperado** | - As despesas registradas estão apresentadas de forma organizada em uma tabela na página Histórico. <br> - Cada despesa é detalhada com informações como data, descrição, categoria e valor. <br> - É possível filtrar as despesas por período ou categoria utilizando os recursos fornecidos na página.
**Dados de entrada** | - N/A (Verificação visual na página Histórico).
**Resultado obtido** | Sucesso. <br> - As despesas estão apresentadas de forma organizada na tabela. <br> - Cada despesa possui as informações detalhadas conforme esperado. <br> - Os filtros de período e categoria funcionam corretamente.

**Caso de Teste** | **CT19 - Validar a visualização detalhada de receitas na página Histórico.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Histórico (histórico.html) do sistema Gerency. <br> 2) Verifique se as receitas registradas estão apresentadas em uma tabela organizada. <br> 3) Confira se cada receita está detalhada com informações como data, descrição, categoria e valor. <br> 4) Verifique se é possível filtrar as receitas por período ou categoria.
**Requisitos associados** | RF-008 / Página Histórico - Visualização Detalhada de Despesas e Receitas
**Resultado esperado** | - As receitas registradas estão apresentadas de forma organizada em uma tabela na página Histórico. <br> - Cada receita é detalhada com informações como data, descrição, categoria e valor. <br> - É possível filtrar as receitas por período ou categoria utilizando os recursos fornecidos na página.
**Dados de entrada** | - N/A (Verificação visual na página Histórico).
**Resultado obtido** | Sucesso. <br> - As receitas estão apresentadas de forma organizada na tabela. <br> - Cada receita possui as informações detalhadas conforme esperado. <br> - Os filtros de período e categoria funcionam corretamente.

**Caso de Teste** | **CT20 - Validar os filtros de pesquisa na página Histórico.**
 :--------------: | ------------
**Procedimento**  |1) Acesse a página Histórico (histórico.html) do sistema Gerency. <br> 2) Localize os filtros de pesquisa disponíveis na página, como por período (15, 30, 60, 90 dias) e tipo de lançamento (despesas, receitas). <br> 3) Selecione diferentes opções de filtro para verificar a funcionalidade. <br> 4) Verifique se as despesas e receitas exibidas na página são atualizadas conforme os filtros selecionados.
**Requisitos associados** | RF-008 / Página Histórico - Visualização Detalhada de Despesas e Receitas
**Resultado esperado** | - Os filtros de pesquisa por período e tipo de lançamento estão disponíveis e funcionais. <br> - Ao selecionar um período específico (15, 30, 60, 90 dias) e tipo de lançamento (despesas, receitas), as informações na página são atualizadas de acordo. <br> - As despesas e receitas exibidas na página refletem os filtros selecionados.
**Dados de entrada** | - N/A (Verificação visual na página Histórico).
**Resultado obtido** | Sucesso. <br> - Os filtros de pesquisa estão presentes e funcionando corretamente. <br> - As informações na página são atualizadas conforme os filtros selecionados, exibindo despesas e receitas de acordo com o período e tipo de lançamento escolhidos.

**Caso de Teste** | **CT21 - Validar os botões de navegação de página na página Histórico.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Histórico (histórico.html) do sistema Gerency. <br> 2) Verifique a presença dos botões de navegação de página, incluindo Primeiro, Anterior, Próximo e Último. <br> 3) Se houver mais de uma página de despesas ou receitas, clique nos botões de navegação para avançar e retroceder entre as páginas. <br> 4) Observe se as informações exibidas na página são atualizadas corretamente ao navegar entre as páginas.
**Requisitos associados** | RF-008 / Página Histórico - Visualização Detalhada de Despesas e Receitas
**Resultado esperado** | - Os botões de navegação (Primeiro, Anterior, Próximo, Último) estão presentes e funcionais. <br> - Ao clicar nos botões de navegação, as informações na página são atualizadas corretamente para exibir as despesas e receitas da página correspondente. <br> - Os botões de navegação funcionam de forma intuitiva e sem erros, permitindo uma navegação eficiente entre as páginas de despesas e receitas.
**Dados de entrada** | - N/A (Verificação visual na página Histórico).
**Resultado obtido** | Sucesso. <br> - Os botões de navegação estão presentes e funcionando conforme o esperado. <br> - As informações na página são atualizadas corretamente ao navegar entre as páginas, mantendo a consistência na visualização das despesas e receitas.

**Caso de Teste** | **CT22 - Validar o campo de busca na página Histórico.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Histórico (histórico.html) do sistema Gerency. <br> 2) Localize o campo de busca na parte superior da página. <br> 3) Insira um termo de busca válido, como uma descrição de despesa ou receita existente no histórico. <br> 4) Pressione Enter ou clique no botão de busca. <br> 5) Verifique se os resultados da busca são exibidos corretamente na tabela de despesas e receitas.
**Requisitos associados** | RF-008 / Página Histórico - Visualização Detalhada de Despesas e Receitas
**Resultado esperado** | - O campo de busca está visível e funcional na página Histórico. <br> - Ao realizar uma busca com um termo válido, os resultados correspondentes são exibidos na tabela de despesas e receitas. <br> - A busca é realizada de forma eficiente, retornando resultados precisos de acordo com o termo inserido.
**Dados de entrada** | - Termo de busca válido (ex: "Aluguel", "Salário", "Mercado").
**Resultado obtido** | Sucesso. <br> - Os resultados da busca são exibidos corretamente na tabela de despesas e receitas. <br> - A busca retorna resultados precisos de acordo com o termo inserido, demonstrando o funcionamento adequado do campo de busca na página Histórico.

**Caso de Teste** | **CT23 - Validar a visualização de metas na página Metas.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Metas (meta.html) do sistema Gerency. <br> 2) Verifique se todas as metas financeiras registradas pelo usuário estão sendo exibidas corretamente. <br> 3) Analise se as informações de cada meta estão completas e legíveis, incluindo descrição, valor da meta, data de início e prazo para realização. <br> 4) Certifique-se de que as metas estão organizadas de forma clara e fácil de entender para o usuário.
**Requisitos associados** | RF-004 / Página Metas - Visualização de Metas
**Resultado esperado** | - Todas as metas financeiras do usuário estão sendo exibidas corretamente na página Metas. <br> - Cada meta apresenta informações completas, incluindo descrição, valor da meta, data de início e prazo para realização. <br> - As metas estão organizadas de forma clara e intuitiva para facilitar a compreensão do usuário.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - As metas financeiras estão sendo exibidas corretamente na página Metas, com todas as informações necessárias para o usuário acompanhar e gerenciar suas metas financeiras de forma eficiente.

**Caso de Teste** | **CT24 - Validar a pesquisa de metas na página Metas.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Metas (meta.html) do sistema Gerency. <br> 2) Localize o campo de pesquisa de metas. <br> 3) Insira um termo de pesquisa válido que corresponda a uma meta já lançada pelo usuário. <br> 4) Pressione o botão de pesquisa ou utilize a tecla Enter para realizar a busca. <br> 5) Verifique se a meta correspondente ao termo de pesquisa é exibida corretamente na lista de metas.
**Requisitos associados** | RF-004 / Página Metas - Visualização de Metas
**Resultado esperado** | - O campo de pesquisa de metas está funcionando corretamente e é possível inserir um termo de pesquisa válido. <br> - Ao realizar a pesquisa, a meta correspondente ao termo de pesquisa é exibida na lista de metas, se existir. <br> - Caso não haja correspondências, a lista de metas permanece inalterada.
**Dados de entrada** | - Termo de pesquisa válido que corresponda a uma meta já lançada pelo usuário.
**Resultado obtido** | Sucesso. <br> - O campo de pesquisa de metas funciona corretamente, exibindo a meta correspondente ao termo de pesquisa inserido. Caso não haja correspondência, a lista de metas permanece inalterada.

**Caso de Teste** | **CT25 - Validar a organização das metas em uma tabela na página Metas.**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página Metas (meta.html) do sistema Gerency. <br> 2) Verifique a organização das metas dentro da tabela. <br> 3) Confira se cada meta está representada em uma linha da tabela, contendo as colunas de descrição, data de criação e um botão para visualizar a meta. <br> 4) Clique no botão "Visualizar Meta" de uma das metas para abrir o modal correspondente.
**Requisitos associados** | RF-004 / Página Metas - Visualização de Metas
**Resultado esperado** | - As metas devem estar organizadas de forma clara e legível dentro da tabela, com uma linha para cada meta. <br> - Cada linha da tabela deve conter as informações relevantes da meta, como descrição, data de criação e um botão para visualizar a meta. <br> - Ao clicar no botão "Visualizar Meta", um modal deve ser aberto, permitindo analisar, editar e excluir a meta selecionada.
**Dados de entrada** | - N/A
**Resultado obtido** | Sucesso. <br> - As metas estão organizadas corretamente dentro da tabela, com todas as informações necessárias visíveis. <br> - Ao clicar no botão "Visualizar Meta", o modal correspondente é aberto, permitindo realizar as ações de análise, edição e exclusão da meta selecionada.



## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Para este projeto, decidimos não realizar testes automatizados de unidade. Entendemos que, para este escopo e objetivo específicos, o foco está na validação manual das funcionalidades e na experiência do usuário ao interagir com o sistema. Acreditamos que a abordagem de testes manuais será suficiente para garantir a qualidade e a conformidade com os requisitos estabelecidos.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



