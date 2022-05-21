### Defina um componente react que renderize três caixas de seleção, conforme descrito:

**Primeira caixa:**

- Exibir todas as opções contidas na lista "orgaos"
- As opções devem ser listadas exibindo a propriedade
  "nome" de cada objeto

**Segunda caixa:**

- Não mostrar opções enquanto não houver valor válido
  selecionado na primeira caixa
- Quando ocorrer seleção de algum valor na primeira caixa,
  atualizar seus valores, exibindo as opções contidas na lista
  "produtos", de acordo com os seguintes critérios:
- Um produto só deve ser mostrado como uma opção caso
  o valor da sua propriedade "id" esteja incluso na lista contida na
  propriedade "produtos" do órgão selecionado na primeira caixa.
- As opções devem ser listadas exibindo a propriedade
  "nome" de cada objeto

**Terceira caixa:**

- Não mostrar opções enquanto não houver valor válido
  selecionado nas outras duas caixas
- Quando ocorrer seleção de algum valor na primeira ou
  segunda caixa, atualizar seus valores, exibindo as opções contidas
  na lista "bancos", de acordo com os seguintes critérios:
- Um banco só deve ser mostrado como uma opção caso o
  valor da sua propriedade "id" esteja incluso na lista contida na
  propriedade "bancos" do produto selecionado na segunda caixa.
- As opções devem ser listadas exibindo as
  propriedades "codigo" e "nome" de cada objeto, no padrão "{codigo}
- {nome}"
- Ao selecionar uma opção, deve ser emitido um alerta
  identificando e exibindo o "id" de cada uma das três opções
  escolhidas.
- As listas a serem usadas para definir as opções devem ser as
  seguintes:
  ```
    orgaos = [
      {id: 1, nome: 'INSS', produtos: [1, 2, 3]},
      {id: 2, nome: 'FGTS', produtos: [1]},
    ]
    produtos = [
      {id: 1, nome: 'Novo', bancos: [1, 3]},
      {id: 2, nome: 'Refinanciamento', bancos: [1]},
      {id: 3, nome: 'Portabilidade', bancos: [1, 2, 3]},
    ]
    bancos = [
      {id: 1, nome: 'Banco do Brasil', codigo: '001'},
      {id: 2, nome: 'Nubank', codigo: '260'},
      {id: 3, nome: 'C6', codigo: '336'},
    ]
  ```
  Estas listas devem estar contidas em um arquivo separado do
  restante do código.


**Rodar o projeto localmente:**

```
yarn start
```
