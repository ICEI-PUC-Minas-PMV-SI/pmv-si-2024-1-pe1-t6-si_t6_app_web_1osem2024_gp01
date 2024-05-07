# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


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

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

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



