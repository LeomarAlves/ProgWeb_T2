# Sistema de Cadastro de Obras de Museu & Biblioteca de Tema CSS

Este projeto consiste em uma página web interativa para cadastro e listagem de obras de museu, acompanhada de uma biblioteca (tema) CSS reutilizável e modularizada com JavaScript externo.

---

## 📁 Estrutura de Arquivos

```text
ProgWeb_T2/
├── .gitignore   # Arquivos e diretórios ignorados pelo Git
├── index.html    # Estrutura HTML da aplicação e página de teste do tema
├── style.css     # Biblioteca (tema) CSS com todas as estilizações padronizadas
├── script.js    # Lógica JavaScript (validações, inserção e exclusão)
└── README.md     # Documentação detalhada do projeto
```

---

## 🎨 Biblioteca de Tema CSS (`style.css`)

O arquivo [style.css](file:///home/leomar/Desktop/ProgWeb_T2/style.css) implementa todas as especificações visuais exigidas sem depender de classes personalizadas nos elementos base:

### 1. Regras Globais da Página
* **Tipografia Única**: Todo o conteúdo utiliza a fonte **Arial** (`* { font-family: Arial, sans-serif; }`).
* **Espaçamento Lateral**: Margem de **15px** nas laterais esquerda e direita (`margin: 15px 15px`).
* **Altura de Linha Aumentada**: Parágrafos (`<p>`), células (`<td>`) e caixas (`<span>`, `<div>`) possuem `line-height: 1.6`.

### 2. Estilização de Campos de Formulário (`input`, `textarea`, `select`)
* **Tamanho da fonte**: `0.85em`.
* **Padding**: `5px`.
* **Bordas**: Sólidas com `1px` de espessura e cor `#555`.
* **Destaque em foco**: Ao receber o foco do usuário (`:focus`), o campo altera a cor de fundo para destaque (`#fff9c4`).
* **Rótulos (`<label>`)**: Formatados em negrito (`font-weight: bold`).

### 3. Estilização de Tabelas (`<table>`)
* **Tamanho do texto**: `0.75em`.
* **Células de dados (`<td>`)**:
  * Padding de `20px`.
  * Alinhamento vertical no topo (`vertical-align: top`).
  * Quebra automática de palavras longas (`word-wrap: break-word`, `overflow-wrap: break-word`, `word-break: break-word`).
  * Alinhamento horizontal justificado (`text-align: justify`).
* **Cabeçalhos (`<th>`)**:
  * Cor de fundo destacada (`#34495e`) com texto branco.
  * Borda inferior sólida com `3px` de espessura na cor `#1a252f`.
* **Interatividade de Linha (`<tr>`)**:
  * Pseudo-classe `:hover` alterando o fundo para indicar a linha selecionada/em foco.
* **Borda da Última Linha**:
  * A última linha da tabela possui borda inferior sólida de `1px` na mesma cor do cabeçalho (`#1a252f`).

---

## 📝 Formulário de Cadastro (`index.html`)

O formulário contém os seguintes campos de entrada:
1. **Nome da obra**: Campo de texto livre, linha única, limite de 100 caracteres.
2. **Autor**: Campo de texto livre, linha única, limite de 100 caracteres.
3. **Ano da obra**: Campo de texto, limite de 4 caracteres.
4. **Período da obra**: Caixa de seleção com opções `vazio`, `d.C` e `a.C`.
5. **Tipo**: Caixa de seleção com opções `vazio`, `quadro`, `escultura` e `outro`.
6. **Detalhamento**: Área de texto multilinha com limite de 2000 caracteres (campo opcional).
7. **Botão Salvar**: Aciona o processo de validação e registro.

---

## ⚙️ Funcionalidades em JavaScript (`script.js`)

O arquivo [script.js](file:///home/leomar/Desktop/ProgWeb_T2/script.js) contém as seguintes funções principais:

### 1. `salvarObra()`
Responsável pela validação dos dados preenchidos e pelo registro na tabela:
* **Limpeza prévia**: Antes de cada validação, limpa mensagens de erro anteriores da lista `<ul>` e remove as bordas vermelhas dos campos.
* **Regras de validação**:
  * Todos os campos são obrigatórios, exceto o *Detalhamento*.
  * *Nome da obra*: Mínimo de 6 caracteres.
  * *Autor*: Mínimo de 10 caracteres.
  * *Ano da obra*: Deve ser um valor numérico válido.
  * *Período da obra* e *Tipo*: Devem ter uma opção válida selecionada (diferente de vazio).
* **Feedback de Erros**:
  * Cada erro encontrado gera um item (`<li>`) na lista `#lista-erros`.
  * Cada campo que falhou recebe a classe `.campo-invalido` (borda vermelha de 1px).
* **Sucesso na Validação**:
  * Cria uma nova linha (`<tr>`) no corpo da tabela (`#tabela-obras`).
  * Preenche as colunas com os dados cadastrados (sem exibir o campo detalhamento na tabela).
  * Limpa o formulário (`reset()`) para o próximo cadastro.

### 2. `mostrarDetalhamento(texto)`
* Executada ao clicar em qualquer linha de dados da tabela.
* Exibe uma janela de alerta (`alert`) contendo o texto do detalhamento daquela obra (ou informa se nenhum detalhamento foi preenchido).

### 3. `excluirLinha(event, botao)`
* Localizada na coluna de ações de cada linha da tabela.
* Utiliza `event.stopPropagation()` para impedir que o clique no botão ative o evento de exibição de detalhamento da linha.
* Solicita confirmação do usuário via `confirm()`.
* Remove a linha da tabela caso o usuário confirme a ação.

---

## 🚀 Como Executar o Projeto

1. Abra o arquivo [index.html](file:///home/leomar/Desktop/ProgWeb_T2/index.html) em qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).
2. Teste a validação clicando no botão **Salvar** com os campos vazios ou preenchidos incorretamente para verificar a lista de erros e as bordas vermelhas.
3. Preencha os dados corretamente e salve para visualizar a nova linha inserida na tabela.
4. Clique na linha da tabela para testar a exibição do detalhamento.
5. Clique no botão **Excluir** para testar a confirmação e exclusão da linha.
