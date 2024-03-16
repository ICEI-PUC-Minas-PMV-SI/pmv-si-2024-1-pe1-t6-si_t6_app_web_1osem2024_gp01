# Especificações do Projeto

Na etapa de Especificações do Projeto, nosso foco está na compreensão das necessidades dos usuários e na definição clara do problema a ser resolvido, assim como na proposição de uma solução eficaz a partir da perspectiva do usuário. Utilizaremos diversas técnicas e ferramentas para alcançar esses objetivos, incluindo o diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além da identificação de restrições do projeto.

1. **Diagrama de Personas**
   - Desenvolveremos um diagrama de personas que represente os diferentes tipos de usuários do sistema, como estudantes, profissionais, autônomos, famílias, etc. Isso nos ajudará a compreender as necessidades específicas de cada grupo de usuários.

2. **Histórias de Usuários**
   - Criaremos histórias de usuários detalhadas para cada persona identificada no diagrama. Essas histórias nos permitirão entender as tarefas que os usuários desejam realizar, seus objetivos e suas expectativas em relação ao sistema.

3. **Requisitos Funcionais e Não Funcionais**
   - A partir das histórias de usuários, identificaremos os requisitos funcionais, ou seja, as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários.
   - Além disso, também definiremos os requisitos não funcionais, como segurança, desempenho, usabilidade, entre outros, que são essenciais para garantir a qualidade e a eficácia do sistema.

4. **Identificação de Restrições do Projeto**
   - Analisaremos as restrições do projeto, como prazos, orçamento, recursos disponíveis e quaisquer outras limitações que possam impactar o desenvolvimento e a entrega do sistema.

Essa fase de Especificações do Projeto é fundamental para garantir que o sistema de gerenciamento financeiro atenda às expectativas e necessidades dos usuários, proporcionando uma experiência positiva e eficiente. As técnicas e ferramentas utilizadas nos ajudarão a criar uma base sólida para o desenvolvimento do produto, focando na satisfação e no sucesso dos usuários finais.


## Personas 🚹
Abaixo são mostradas as personas que compõem o projeto.

<div align="center">

![Nome da imagem](https://i.imgur.com/3YdETzU.png)
![Nome da imagem](https://i.imgur.com/BKycAVV.png)

</div>


## Histórias de Usuários 📝

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema | Cadastrar usuários                | Criar contas pessoais com informações básicas, como nome, e-mail e senha. |
|Usuário do sistema | Registrar receitas        | Insirir fontes de renda, como salários, receitas extras, investimentos, etc.                   |
|Usuário do sistema | Registrar despesas       | Registrar                      despesas diárias, mensais ou anuais, incluindo data, categoria (alimentação, transporte, moradia, etc.), valor e descrição.   |
|Usuário do sistema | Visualizar despesas               | Ter acesso a uma visão detalhada e organizada de todas as despesas registradas.                   |
|Usuário do sistema | Definir metas                      |   Estabelecer metas financeiras, como economizar para uma viagem, comprar um bem específico, pagar dívidas, etc.                  |
|Usuário do sistema | Emitir um relatório      | Gerar relatórios que mostrem o histórico de despesas, receitas, saldo atual, progresso em relação às metas financeiras, entre outros.                |


## Requisitos 📣

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-1| A aplicação deve permitir que o usuário visualize e gerencie suas tarefas | ![Static Badge](https://img.shields.io/badge/ALTA-red) |  
|RF-2| A aplicação deve permitir que os usuários registrem suas despesas, incluindo a quantidade, a data e a categoria da despesa. | ![Static Badge](https://img.shields.io/badge/ALTA-red) |  
|RF-3| A aplicação deve permitir que os usuários definam um orçamento mensal. | ![Static Badge](https://img.shields.io/badge/ALTA-red) | 
|RF-4| A aplicação deve permitir que os usuários definam metas financeiras e acompanhem seu progresso em direção a essas metas. | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow) | 
|RF-4| A aplicação deve permitir que os usuários emitam um relatório e acompanhem seu progresso em relação às metas financeiras, entre outros.  | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow) | 




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-1| O aplicativo deve ser capaz de suportar um grande número de usuários simultâneos sem degradação significativa do desempenho. |![Static Badge](https://img.shields.io/badge/ALTA-red) | 
|RNF-2| A aplicação deve processar requisições do usuário em no máximo 3s | ![Static Badge](https://img.shields.io/badge/BAIXA-green)  |
|RNF-3| O aplicativo deve ser fácil de usar, com uma interface de usuário intuitiva e uma experiência de usuário agradável. | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow)  |
|RNF-4| O aplicativo deve estar disponível 24/7, com tempo de inatividade mínimo. |  ![Static Badge](https://img.shields.io/badge/ALTA-red) |
|RNF-5| O aplicativo deve ser compatível com vários navegadores e dispositivos, incluindo desktops e dispositivos móveis. | ![Static Badge](https://img.shields.io/badge/ALTA-red)   |
|RNF-5| O aplicativo deve garantir a segurança dos dados dos usuários. | ![Static Badge](https://img.shields.io/badge/ALTA-red)   |




## Restrições ❌

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve-se utilizar HTML5, CSS3 e JavaScript para a aplicação        |
|04| Deve existir um sistema de login        |
|05| Todas etapas devem ser realizadas       |


