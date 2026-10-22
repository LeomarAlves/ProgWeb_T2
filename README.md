# Sistema de Cadastro de Obras de Museu & Biblioteca de Tema CSS

Projeto desenvolvido para a disciplina de **Programação Web (Trabalho 2)**. Consiste em uma aplicação web para cadastro, listagem, detalhamento e exclusão de obras de museu, acompanhada de um tema CSS modularizado e scripts JavaScript em arquivos externos para manipulação dinâmica do DOM e validação de formulários.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estruturação semântica da página, formulário e tabela de registros.
* **CSS3**: Folha de estilos independente (`style.css`), padronizando fontes, tabelas, campos e interações visuais.
* **JavaScript (Vanilla / ES6)**: Manipulação dinâmica do DOM, validações estritas de entrada, inserção e remoção de linhas sem recarregar a página.

---

## 📁 Estrutura de Arquivos

```text
ProgWeb_T2/
├── .gitignore    # Arquivos e diretórios desconsiderados no versionamento Git
├── index.html    # Estrutura HTML da página de cadastro e tabela de dados
├── style.css     # Folha de estilos padronizada (tema CSS global)
├── script.js     # Regras de negócio, validação e manipulação do DOM
└── README.md     # Documentação completa e atualizada da aplicação
```

---

## 🎨 Biblioteca de Tema CSS (`style.css`)

O arquivo [style.css](file:///home/leomar/Desktop/ProgWeb_T2/style.css) implementa as regras de estilização da página sem dependência de bibliotecas externas:

### 1. Regras Globais
* **Tipografia Única**: Fonte **Arial** aplicada globalmente a todos os elementos (`* { font-family: Arial, sans-serif; }`).
* **Box Model**: `box-sizing: border-box` aplicado globalmente para garantir dimensionamento previsível de espaçamentos e bordas.
* **Espaçamento Lateral**: Margem de **15px** nas laterais esquerda e direita da página (`margin: 15px 15px`).
* **Altura de Linha Aumentada**: Parágrafos (`<p>`), células (`<td>`), textos em caixas (`<span>`, `<div>`) e corpo (`body`) possuem `line-height: 1.6`, melhorando a legibilidade.

### 2. Estilização de Campos de Formulário (`input`, `textarea`, `select`)
* **Tamanho da Fonte**: `0.85em`.
* **Espaçamento Interno (Padding)**: `5px`.
* **Bordas**: Sólidas com `1px` de espessura e cor `#555`, com cantos suavemente arredondados (`border-radius: 3px`).
* **Dimensionamento Responsivo**: Largura `100%` com limite máximo de `max-width: 500px` e exibição em bloco (`display: block`).
* **Destaque em Foco (`:focus`)**: Ao receber foco, o campo altera a cor de fundo para destaque amarelo claro (`#fff9c4`) com remoção do outline padrão.
* **Rótulos (`<label>`)**: Formatados em negrito (`font-weight: bold`), exibição em bloco com margens superior e inferior padronizadas.

### 3. Estilização de Tabelas (`<table>`)
* **Tamanho do Texto**: `0.75em`.
* **Estrutura**: `width: 100%` e `border-collapse: collapse` com margens verticais de `20px`.
* **Cabeçalhos (`<th>`)**:
  * Fundo contrastante na cor `#34495e` e texto em branco (`#ffffff`).
  * Borda inferior sólida com `3px` de espessura na cor `#1a252f`.
  * Padding de `12px 20px`.
  * Alinhamento horizontal justificado (`text-align: justify`) e alinhamento vertical no topo (`vertical-align: top`).
  * Quebra automática de palavras longas (`word-wrap: break-word`, `overflow-wrap: break-word`).
* **Células de Dados (`<td>`)**:
  * Padding generoso de `20px`.
  * Alinhamento vertical no topo (`vertical-align: top`).
  * Alinhamento horizontal justificado (`text-align: justify`).
  * Quebra automática de palavras longas (`word-wrap: break-word`, `overflow-wrap: break-word`, `word-break: break-word`).
  * Borda inferior sutil de `1px solid #e0e0e0`.
* **Interatividade de Linha (`<tr>`)**:
  * Pseudo-classe `:hover` altera a cor de fundo das linhas do corpo (`#f2f6fa`) e define o cursor como ponteiro (`cursor: pointer`), indicando interatividade ao clicar.
* **Borda da Última Linha**:
  * A última linha da tabela recebe borda inferior sólida de `1px` com a mesma cor escura do cabeçalho (`#1a252f`).

### 4. Botões e Estados de Validação
* **Botões (`button`)**: Fonte `0.85em`, padding de `8px 16px`, borda sólida de `1px #555`, cantos arredondados (`3px`), fundo `#ecf0f1` e efeito `:hover` escurecendo para `#bdc3c7`.
* **Campos Inválidos (`.campo-invalido`)**: Aplica borda vermelha de `1px solid red !important` nos campos que falharam na validação.
* **Lista de Erros (`#lista-erros`)**: Texto em vermelho com recuo à esquerda de `20px`.

---

## 📝 Formulário de Cadastro (`index.html`)

O formulário ([index.html](file:///home/leomar/Desktop/ProgWeb_T2/index.html)) conta com estrutura semântica refatorada, na qual os campos de controle são aninhados diretamente dentro de seus respectivos elementos `<label>`, simplificando o código e mantendo a acessibilidade nativa.

### Campos do Formulário:
1. **Nome da obra**: Texto de linha única (`input[type="text"]`), obrigatório, limite de 100 caracteres.
2. **Autor**: Texto de linha única (`input[type="text"]`), obrigatório, limite de 100 caracteres.
3. **Ano da obra**: Texto de linha única (`input[type="text"]`), obrigatório, limite de 4 caracteres.
4. **Período da obra**: Seleção (`<select>`), obrigatório, com opções:
   * `Selecione...` (vazio - inválido)
   * `d.C`
   * `a.C`
5. **Tipo**: Seleção (`<select>`), obrigatório, com opções:
   * `Selecione...` (vazio - inválido)
   * `quadro`
   * `escultura`
   * `outro`
6. **Detalhamento**: Área de texto multilinha (`<textarea>`), opcional, com limite de 2000 caracteres.
7. **Botão Salvar**: Aciona a validação e inclusão da obra na tabela via função `salvarObra()`.

### Obras Pré-cadastradas na Tabela:
A tabela já inclui inicialmente dois exemplos para demonstração imediata das funcionalidades de detalhamento e exclusão:
* *A Noite Estrelada* (Vincent van Gogh, 1889, d.C, quadro)
* *Estátua de Davi* (Michelangelo Buonarroti, 1504, d.C, escultura)

---

## ⚙️ Regras de Negócio e JavaScript (`script.js`)

O arquivo [script.js](file:///home/leomar/Desktop/ProgWeb_T2/script.js) implementa a interatividade da página dividida em três funções principais:

### 1. `salvarObra()`
Controla o fluxo de validação e inserção de novos registros:
* **Limpeza Prévia**: Antes de validar, esvazia a lista de erros (`#lista-erros`) e remove a classe `.campo-invalido` de todos os campos obrigatórios.
* **Validações Aplicadas**:
  * **Nome da obra**: Obrigatório (não pode ser vazio após `trim()`) e deve conter no mínimo 6 caracteres.
  * **Autor**: Obrigatório (não pode ser vazio após `trim()`) e deve conter no mínimo 10 caracteres.
  * **Ano da obra**:
    * Obrigatório (não pode ser vazio após `trim()`).
    * Validação numérica estrita: Converte via `parseInt(ano, 10)` e verifica se `isNaN(anoNum)`, se `anoNum.toString() !== ano` (rejeitando números com casas decimais, sinais ou caracteres mistos) e se `anoNum <= 0` (exigindo ano estritamente positivo).
  * **Período da obra**: Obrigatório (o valor selecionado não pode ser vazio).
  * **Tipo da obra**: Obrigatório (o valor selecionado não pode ser vazio).
  * **Detalhamento**: Campo opcional (não gera erro caso deixado em branco).
* **Tratamento de Falhas**:
  * Caso haja um ou mais erros, a execução é interrompida.
  * Cada mensagem de erro é adicionada como um elemento `<li>` na lista `#lista-erros`.
  * Todos os campos correspondentes aos erros recebem a classe `.campo-invalido` (borda vermelha).
* **Tratamento de Sucesso**:
  * Cria dinamicamente um novo elemento `<tr>`.
  * Associa o evento de clique da linha à função `mostrarDetalhamento(detalhamento)`.
  * Cria as células `<td>` para Nome, Autor, Ano, Período e Tipo (o detalhamento não é exibido diretamente na tabela, conforme os requisitos).
  * Cria a célula de ações com o botão **Excluir**, vinculado à função `excluirLinha(event, this)`.
  * Adiciona a nova linha ao corpo da tabela (`#tabela-obras`).
  * Limpa todos os campos do formulário através do método `reset()`.

### 2. `mostrarDetalhamento(texto)`
* Disparada ao clicar em qualquer linha de dados da tabela.
* Se houver detalhamento cadastrado, exibe um alerta modal (`alert`) com o texto da descrição.
* Se o detalhamento não tiver sido preenchido, exibe a mensagem amigável: *"Nenhum detalhamento informado para esta obra."*.

### 3. `excluirLinha(event, botao)`
* Localizada na coluna de ações de cada linha.
* Invoca `event.stopPropagation()` para impedir a propagação do clique para o `<tr>`, evitando que o detalhamento seja disparado ao clicar no botão de exclusão.
* Solicita confirmação ao usuário por meio da janela nativa `confirm('Deseja realmente excluir esta obra da tabela?')`.
* Em caso afirmativo, localiza a linha pai com `botao.closest('tr')` e a remove do DOM (`linha.remove()`).

---

## 📋 Matriz de Atendimento aos Requisitos

| Requisito do Trabalho | Onde está implementado | Detalhes |
| :--- | :--- | :--- |
| **Fonte Arial uniforme** | `style.css` (linha 2) | Seletor universal `*` e `body` definem `Arial, sans-serif`. |
| **Distância lateral de 15px** | `style.css` (linha 8) | `body { margin: 15px 15px; }`. |
| **Altura de linha 1.6** | `style.css` (linha 13) | `p, td, span, div { line-height: 1.6; }`. |
| **Estilo da tabela (0.75em, colapso de bordas)** | `style.css` (linha 17) | `font-size: 0.75em`, `border-collapse: collapse`. |
| **Padding de células (20px)** | `style.css` (linha 37) | `td { padding: 20px; }`. |
| **Alinhamento e quebra de palavras nas células** | `style.css` (linhas 38-42) | `vertical-align: top`, `word-wrap`, `text-align: justify`. |
| **Cabeçalho com fundo e borda inferior sólida 3px** | `style.css` (linhas 25-34) | Fundo `#34495e`, borda `3px solid #1a252f`, texto em `justify`. |
| **Pseudo-classe `:hover` nas linhas** | `style.css` (linha 46) | `tbody tr:hover` com fundo `#f2f6fa` e cursor `pointer`. |
| **Última linha com borda inferior igual ao cabeçalho** | `style.css` (linhas 51-54) | `tr:last-child td { border-bottom: 1px solid #1a252f; }`. |
| **Campos de formulário (0.85em, padding 5px, borda 1px #555)** | `style.css` (linhas 56-66) | Regras para `input, textarea, select`. |
| **Fundo em destaque no foco (`:focus`)** | `style.css` (linhas 68-71) | Fundo `#fff9c4` para campos em foco. |
| **Rótulos (`<label>`) em negrito** | `style.css` (linhas 73-78) | `label { font-weight: bold; }`. |
| **Detalhamento não visível diretamente na tabela** | `script.js` (linhas 88-117) | O detalhamento é salvo apenas no evento da linha. |
| **Validação completa e lista de erros** | `script.js` (linhas 18-78) | Validação com regras específicas e inserção em `#lista-erros`. |
| **Bordas vermelhas nos campos com erro** | `script.js` (linha 74) e `style.css` (linha 94) | Classe `.campo-invalido` com `border: 1px solid red !important`. |
| **Exclusão com confirmação e sem propagar clique** | `script.js` (linhas 9-16) | `confirm()` e `event.stopPropagation()`. |

---

## 🚀 Como Executar e Testar

1. Clone ou baixe este repositório para o seu computador.
2. Abra o arquivo [index.html](file:///home/leomar/Desktop/ProgWeb_T2/index.html) em qualquer navegador web moderno (Chrome, Firefox, Safari, Edge).
3. **Cenários de Teste Recomendados**:
   * **Validação com campos vazios**: Clique diretamente em **Salvar** e observe todas as mensagens na lista de erros e as bordas vermelhas nos campos com falha.
   * **Validação de tamanhos mínimos**:
     * Preencha o nome com menos de 6 caracteres (ex.: `Mona`) e o autor com menos de 10 (ex.: `Da Vinci`). Observe os erros gerados.
   * **Validação de ano**:
     * Digite valores inválidos como letras (`abc`), números negativos (`-100`) ou decimais (`20.5`). O sistema rejeitará e exibirá a mensagem de ano inválido.
   * **Cadastro com sucesso**:
     * Preencha Nome com 6+ caracteres, Autor com 10+ caracteres, Ano válido (> 0), selecione Período e Tipo, informe um texto no Detalhamento e clique em **Salvar**. A nova obra aparecerá no fim da tabela e o formulário será redefinido.
   * **Visualização de Detalhamento**:
     * Clique sobre qualquer linha da tabela para visualizar o alerta com a descrição completa da obra.
   * **Exclusão de Registros**:
     * Clique no botão **Excluir** de qualquer linha. Confirme a exclusão no diálogo modal; a obra será removida da tabela sem que o detalhamento seja disparado.
