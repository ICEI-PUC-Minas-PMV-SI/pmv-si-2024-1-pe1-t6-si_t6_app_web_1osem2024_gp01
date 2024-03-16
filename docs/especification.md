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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema 1 |  Registrar despesas                | Acompanhar movimentação do dinheiro e gerenciar melhor as finanças. |
|Usuário do sistema 2 | Definir um orçamento mensal        | Planejar finanças.                    |
|Administrador do sistema | Adicionar novos recursos       | Para melhorar continuamente o aplicativo e atender às necessidades dos usuários. |
|Usuário do sistema 3 |  Visualizar despesas               | Entender os hábitos de gastos e tomar decisões financeiras.                   |
|Usuário do sistema 4 | Definir metas                      |   Visar o futuro e alcançar os objetivos financeiros.                   |
|Administrador do sistema | Acompanhar feedback de usuários |  Para melhorar a experiência do usuário e fazer mudanças com base em suas necessidades e sugestões.                   |
|Usuário do sistema 5 | Receber alertas        | Ficar atento à gastos excessivos ou atingimento de metas.                   |
|Administrador do sistema | Criar uma interface intuitiva        | Fazer com que a visualização de dados seja clara para o usuário.                   |
|Usuário do sistema 6 | Meio de comunicação com o app      | Informar sobre bugs ou infomações equivocadas                 |


## Requisitos 📣

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-1| A aplicação deve permitir que o usuário gerencie suas tarefas | ![Static Badge](https://img.shields.io/badge/ALTA-red) |  
|RF-2| A aplicação deve permitir que os usuários registrem suas despesas, incluindo a quantidade, a data e a categoria da despesa. | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow) | 
|RF-3| A aplicação deve permitir que os usuários definam um orçamento mensal. | ![Static Badge](https://img.shields.io/badge/ALTA-red) | 
|RF-4| A aplicação deve permitir que os usuários definam metas financeiras e acompanhem seu progresso em direção a essas metas. | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow) | 
|RF-5| A aplicação deve permitir que os administradores ativem ou desativem contas de usuário e redefinam senhas de usuário. | ![Static Badge](https://img.shields.io/badge/BAIXA-green) | 
|RF-6| A aplicação deve permitir que haja um canal de comunição entre usuário e administradores. |![Static Badge](https://img.shields.io/badge/ALTA-red)  | 




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-1| O aplicativo deve ser capaz de suportar um grande número de usuários simultâneos sem degradação significativa do desempenho. |![Static Badge](https://img.shields.io/badge/ALTA-red) | 
|RNF-2| A aplicação deve processar requisições do usuário em no máximo 3s | ![Static Badge](https://img.shields.io/badge/BAIXA-green)  |
|RNF-3| O aplicativo deve ser fácil de usar, com uma interface de usuário intuitiva e uma experiência de usuário agradável. | ![Static Badge](https://img.shields.io/badge/M%C3%89DIA-yellow)  |
|RNF-4| O aplicativo deve estar disponível 24/7, com tempo de inatividade mínimo. |  ![Static Badge](https://img.shields.io/badge/ALTA-red) |
|RNF-5| O aplicativo deve ser compatível com vários navegadores e dispositivos, incluindo desktops e dispositivos móveis. | ![Static Badge](https://img.shields.io/badge/ALTA-red)   |



## Restrições ❌

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve-se utilizar HTML5, CSS3 e JavaScript para a aplicação        |
|04| Deve existir um sistema de login        |
|05| Todas etapas devem ser realizadas       |


