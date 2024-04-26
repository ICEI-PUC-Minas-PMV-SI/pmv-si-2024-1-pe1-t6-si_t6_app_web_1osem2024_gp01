# Programação de Funcionalidades

A Programação de Funcionalidades para um sistema de controle financeiro abrange uma variedade de aspectos que são essenciais para garantir a eficiência e a usabilidade da aplicação. Aqui está uma descrição geral das funcionalidades que foram implementadas no sistema Gerency:

1. **Cadastro de Novo Usuário:**

   - Implementação de um formulário de cadastro (novousuario.html) que exige informações como nome, email, senha, e confirmação de senha.
   - Validação dos campos para garantir que os dados inseridos sejam válidos e atendam aos critérios estabelecidos (ex: email válido, senha com mínimo de caracteres).
   - Envio de um email de confirmação após o cadastro bem-sucedido, utilizando uma função de validação JavaScript.

2. **Login de Usuário:**

   - Desenvolvimento de um formulário de login (index.html) que solicita usuário (email ou nome de usuário) e senha.
   - Validação dos campos obrigatórios (Usuário e Senha) e redirecionamento para a página bemvindo.html após o login bem-sucedido.

3. **Recuperação de Senha:**

   - Criação de uma página (recuperacaosenha.html) com um campo obrigatório para o email do usuário que esqueceu a senha.
   - Validação do campo de email e envio de um email com instruções para a recuperação da senha.

4. **Página Home:**

   - Desenvolvimento da página (home.html) com um menu hamburguer no canto superior esquerdo contendo as opções: Home, Historico, e Metas.
   - Centralização do nome do sistema "Gerency" na página.
   - Inclusão de um ícone de usuário logado no canto superior direito.
   - Exibição de três retângulos (Saldo, Receitas, Despesas). Logo abaixo, implementação de dois retângulos com acesso a página "Histórico" filtrada por tipo de lançamento e acesso a página "Metas".
   - Como última linha da página "Home", existe um retângulo que apresenta os relatórios que podem ser filtrados por botões de lançamento.

5. **Página Home - Registro de Receitas, Despesas e Metas:**

   - Implementação de modais na página (home.html) para o usuário registrar suas receitas, despesas e metas atráves de botões com o ícone de "+" para adicionar novos valores.
   - Campos para data, descrição, categoria, valor, etc., com validação dos dados inseridos.

6. **Página Histórico - Visualização Detalhada de Despesas e Receitas:**

   - Inclusão de filtros de pesquisa para facilitar a navegação no histórico, como por período (15, 30, 60, 90 dias) e tipo de lançamento.
   - Desenvolvimento da página (histórico.html) que apresenta uma visão detalhada e organizada de todas as despesas e receitas registradas atráves de uma tabela.
   - Implementação de modais de edição na página (histórico.html), onde o usuário edita seus lançamentos, exclui ou analisa de forma detalhada.

7. **Página Metas - Visualização de Metas:**
   - Implementação de uma página (meta.html) para exibir as metas financeiras do usuário, incluindo todas as metas registradas anteriormente atráves de uma tabela.
   - Organização das metas dentro de uma tabela, com colunas de descrição, data e botão de visualizar meta que implementa um modal onde é possível analisar, editar e excluir a meta.

- Cadastro de Novo Usuário: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp)
- Login de Usuário: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)
- Recuperação de Senha: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp)
- Página Home: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)
- Visualização Detalhada de Despesas: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)
- Registro de Receitas e Despesas: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)
- Visualização do Histórico: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                                                               | Responsável     | Artefato Criado       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------------- |
| RF-001 | A aplicação permite que novos usuários se cadastrem inserindo informações como nome, email, senha e confirmação de senha.                                                            | Isabelle        | novousuario.html      |
| RF-002 | A aplicação valida se todos os campos obrigatórios estão preenchidos no formulário de cadastro.                                                                                      | Isabelle        | novousuario.html      |
| RF-003 | A aplicação valida se o email inserido possui um formato válido.                                                                                                                     | Isabelle        | novousuario.html      |
| RF-004 | A aplicação permite que usuários cadastrados façam login no sistema utilizando seu email e senha.                                                                                    | Isabelle        | login.html            |
| RF-005 | A aplicação valida se os campos de email e senha estão preenchidos no formulário de login.                                                                                           | Isabelle        | login.html            |
| RF-006 | A aplicação oferece uma funcionalidade para que os usuários possam recuperar sua senha caso a esqueçam.                                                                              | Isabelle        | recuperarsenha.html   |
| RF-007 | A aplicação valida se o campo de email está preenchido no formulário de recuperação de senha.                                                                                        | Isabelle        | recuperarsenha.html   |
| RF-008 | A aplicação apresenta um painel inicial após o login, mostrando informações como saldo, receitas e despesas.                                                                         | Isabelle/Ingrid | home.html             |
| RF-009 | A aplicação inclui um menu horizontal com opções de navegação para visualizar despesas, registrar receitas, registrar despesas, definir metas e emitir relatório.                    | Isabelle/Ingrid | home.html             |
| RF-010 | A aplicação apresenta uma página que mostra uma visão detalhada e organizada de todas as despesas registradas.                                                                       | Isabelle        | viewdespesas.html     |
| RF-011 | A aplicação apresenta um menu horizontal na página de visualização de despesas para navegação entre outras funcionalidades do sistema.                                               | Isabelle        | viewdespesas.html     |
| RF-012 | A aplicação apresenta uma página para permitir que o usuário registre suas receitas no sistema.                                                                                      | Aluno           | registroreceitas.html |
| RF-013 | A aplicação valida se todos os campos obrigatórios estão preenchidos no formulário de registro de receitas.                                                                          | Aluno           | registroreceitas.html |
| RF-014 | A aplicação apresenta uma página para permitir que o usuário registre suas despesas no sistema.                                                                                      | Aluno           | registrodespesas.html |
| RF-015 | A aplicação valida se todos os campos obrigatórios estão preenchidos no formulário de registro de despesas.                                                                          | Aluno           | registrodespesas.html |
| RF-016 | A aplicação apresenta uma página para que o usuário possa definir metas financeiras, como economias mensais ou objetivos de gastos.                                                  | Ingrid          | meta.html             |
| RF-017 | A aplicação valida se todos os campos obrigatórios estão preenchidos no formulário de definição de metas.                                                                            | Ingrid          | meta.html             |
| RF-018 | A aplicação apresenta uma página para permitir que o usuário emita relatórios financeiros, incluindo informações como saldo, receitas, despesas e metas alcançadas.                  | Aluno           | relatorio.html        |
| RF-019 | A aplicação apresenta uma funcionalidade de histórico para que o usuário possa visualizar todas as transações financeiras registradas no sistema, incluindo detalhes e estatísticas. | Ingrid          | historico.html        |

## Descrição das estruturas:

|         **Tela**         |                **Nome do campo**                | **Tipo** | **Descrição**                                  | **Exemplo**            |
| :----------------------: | :---------------------------------------------: | -------- | ---------------------------------------------- | ---------------------- |
| Cadastro de Novo Usuário |             Nome (id: nomeUsuario)              | Texto    | Nome completo do usuário                       | João da Silva          |
| Cadastro de Novo Usuário |             mail (id: emailUsuario)             | Texto    | Endereço de email do usuário                   | joao.silva@example.com |
| Cadastro de Novo Usuário |            Senha (id: senhaUsuario)             | Texto    | Senha de acesso                                | senha@123              |
| Cadastro de Novo Usuário | Confirmação de Senha (id: confirmaSenhaUsuario) | Texto    | Confirmação da senha inserida.                 | senha@123              |
|     Login de Usuário     |             Email (id: emailLogin)              | Texto    | Endereço de email do usuário para login.       | joao.silva@example.com |
|     Login de Usuário     |             Senha (id: senhaLogin)              | Texto    | Senha de acesso para login.                    | senha@123              |
|   Recuperação de Senha   |          Email (id: emailRecuperacao)           | Texto    | Endereço de email do usuário para recuperação. | joao.silva@example.com |
|           Home           |            Saldo (id: saldoUsuario)             | Numero   | Saldo financeiro do usuário.                   | R$ 1500,00             |
|           Home           |          Receitas (id: totalReceitas)           | Numero   | Total de receitas registradas pelo usuário.    | R$ 3000,00             |
|           Home           |          Despesas (id: totalDespesas)           | Numero   | Total de despesas registradas pelo usuário.    | R$ 2000,00             |
| Visualização de Despesas |          ID da Despesa (id: idDespesa)          | Texto    | Identificação única da despesa.                | "D001"                 |
| Visualização de Despesas |        Descrição (id: descricaoDespesa)         | Texto    | Descrição da despesa.                          | Compra de mantimentos  |
| Visualização de Despesas |            Valor (id: valorDespesa)             | Numero   | Valor da despesa.                              | R$ 100,00              |
| Visualização de Despesas |             Data (id: dataDespesa)              | Texto    | Data da despesa.                               | 2024-04-15             |
| Visualização de Despesas |        Categoria (id: categoriaDespesa)         | Texto    | Categoria da despesa.                          | Alimentação            |
