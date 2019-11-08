# store-nicollas
Projeto de Teste Prático da Policia de Mato Grosso

#Começo do Projeto

1) Criando o projeto
    Foi criado um projeto, a partir do Angular Cli (ng new).
    Foi instalado o Bootstrap mais recente. ( npm -install boostrap --save)
    Foi instalado o Angular Material ao projeto. ( ng add @angular/material)
    Foi instalado o Popper.js ao projeto.  ( npm -install popper.js --save)

    Criado 2 modulos separados do modulo raiz: Payment e Product.  (ng g module)

2) Organização
    Foi dividido o projeto em 4 modulos.  Raiz (home), Payment (Pagamento), Product (Produto) e o Shared (Compartilhado).

    Não houve tempo para melhorar as rotas e colocar lazy-loading.
    O Angular Material Acabou ficando espalhado, porém deveria ser tudo na Raiz.

    São poucos arquivos, todos bem simples. Possui a Rota Principal e Duas Rotas Filhas ( Do produto para pagamento, e do pagamento para home).

    Não foi adicionado testes unitários pelo pouco tempo.

3) Home
    Na pagina inicial busca os itens das ofertas pela api, sendo mostrados páginados. Com um layout simples.

    Todos os botões superiores não deu tempo de implementação ( Pesquisa, Cadastro, Carrinho de Compras), são mais para
    dar uma idéia da visão (layout).

    Para prosseguir para compra, deve clicar no botão de compra.

4) Product
    Na página do produto, que é direcionada ao clicar no botão de compra, é mostrado as informações do produto clicado.
    Feito com um layout simples mostrando as informações disponíveis.

    Faltou colocar a questão de "Quanto você esta economizando com a oferta", sendo a diferença do preço de "price_market" e "price".

    Os dados são pegos da api pelo id, passado por parametro. Melhoria de URI poderia ser feito colocando na rota (visualmente).

    Observação Importante: Para fins de testes, como não seria possível implementar um sistema de carrinhos, para modificar a quantidade e etc....,  ao entrar nesta tela, o sistema automaticamente já salva aquele item como para "comprar". É salvo em uma variavel "global", no arquivo shared/services/global.

    Assim, toda vez que entra nesta página, adiciona um item. Voltar, e entrar novamente, aumenta a quantidade em 1 (pode voltar pelo navegador ou clicar na imagem da logo). Se for um item diferente, adiciona a variavel.

    Desta maneira da para simular comprar várias quantidades e itens diferentes. Porém não foi adicionado um método de "clear" (limpeza da variavel). Logo, para esvaziar, basta dar refresh.

    Assim sendo, tem o botão de compra para seguir para pagamento.

5) Payment
    Na página do pagamento foi feito por "etapas". As etapas são: Usuário, Endereço e Pagamento (aonde fica um resumo também).

    Esta livre a opção de navegar pelas etapas sem concluir a anterior. Para tirar esta opção, existe a variavel de "isLinear". Se ela for igual a true, só avança de etapa se estiver válido os dados de acordo com as regras informadas. Em geral, a regra é somente de "estar preenchido", não houve tempo para melhora-las.

    Layout básico e limpo para facilitar mudanças.

    Na etapa de pagamento, existe um pequeno resumo dos itens que serão comprados. E então deve ser inserido as informações de cartão e etc... Não foi inserido a informação de Parcelamento, que pode ser feito colocando um cálculo mátematico simples para visualização.

    Nesta última etapa existe o botão de Finalizar. Não foi bloqueado este botão, ou seja, pode ser clicado a qualquer hora, e exibira um "dialog" (modal), informando que o pagamento foi realizado com um resumo novamente. Ao clicar no botão voltar deste "dialog" voltará para a home.

6) Carousel em Produto
    O carousel no produto foi feito de maneira manual sem usar uma biblioteca. Acabou que não foi feito um "stop" para o ciclo dele. Logo ao chegar na última imagem, ele repete para a primeira e assim continua.

7) Footer
    Não foi adicionado um footer.



# StoreNicollas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
