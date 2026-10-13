function mostrarDetalhamento(texto) {
    if (texto && texto.trim() !== '') {
        alert('Detalhamento da obra:\n\n' + texto);
    } else {
        alert('Nenhum detalhamento informado para esta obra.');
    }
}

function excluirLinha(event, botao) {
    event.stopPropagation();
    var confirmar = confirm('Deseja realmente excluir esta obra da tabela?');
    if (confirmar) {
        var linha = botao.closest('tr');
        linha.remove();
    }
}

function salvarObra() {
    var campoNome = document.getElementById('nome');
    var campoAutor = document.getElementById('autor');
    var campoAno = document.getElementById('ano');
    var campoPeriodo = document.getElementById('periodo');
    var campoTipo = document.getElementById('tipo');
    var campoDetalhamento = document.getElementById('detalhamento');
    var listaErros = document.getElementById('lista-erros');

    // Limpar mensagens e bordas vermelhas no início da validação
    listaErros.innerHTML = '';
    var camposObrigatorios = [campoNome, campoAutor, campoAno, campoPeriodo, campoTipo];
    for (var i = 0; i < camposObrigatorios.length; i++) {
        camposObrigatorios[i].classList.remove('campo-invalido');
    }

    var erros = [];

    // Validação: Nome da obra (obrigatório e mínimo 6 caracteres)
    var nome = campoNome.value.trim();
    if (nome === '') {
        erros.push({ campo: campoNome, mensagem: 'O campo "Nome da obra" é obrigatório.' });
    } else if (nome.length < 6) {
        erros.push({ campo: campoNome, mensagem: 'O nome da obra deve ter no mínimo 6 caracteres.' });
    }

    // Validação: Autor (obrigatório e mínimo 10 caracteres)
    var autor = campoAutor.value.trim();
    if (autor === '') {
        erros.push({ campo: campoAutor, mensagem: 'O campo "Autor" é obrigatório.' });
    } else if (autor.length < 10) {
        erros.push({ campo: campoAutor, mensagem: 'O nome do autor deve ter no mínimo 10 caracteres.' });
    }

    // Validação: Ano da obra (obrigatório e número válido)
    var ano = campoAno.value.trim();
    if (ano === '') {
        erros.push({ campo: campoAno, mensagem: 'O campo "Ano da obra" é obrigatório.' });
    } else if (isNaN(ano) || isNaN(parseInt(ano, 10))) {
        erros.push({ campo: campoAno, mensagem: 'O ano da obra deve ser um número válido.' });
    }

    // Validação: Período (obrigatório, vazio não é válido)
    var periodo = campoPeriodo.value;
    if (periodo === '') {
        erros.push({ campo: campoPeriodo, mensagem: 'Selecione um valor para o "Período da obra".' });
    }

    // Validação: Tipo (obrigatório, vazio não é válido)
    var tipo = campoTipo.value;
    if (tipo === '') {
        erros.push({ campo: campoTipo, mensagem: 'Selecione um valor para o "Tipo".' });
    }

    // Se houver erros, exibe a lista e aplica borda vermelha aos campos com erro
    if (erros.length > 0) {
        for (var j = 0; j < erros.length; j++) {
            var item = document.createElement('li');
            item.textContent = erros[j].mensagem;
            listaErros.appendChild(item);
            erros[j].campo.classList.add('campo-invalido');
        }
        return;
    }

    // Se tudo estiver válido, registra na tabela
    var detalhamento = campoDetalhamento.value.trim();
    var tabelaCorpo = document.getElementById('tabela-obras');
    var tr = document.createElement('tr');

    // Ao clicar na linha, exibe o detalhamento
    tr.onclick = function() {
        mostrarDetalhamento(detalhamento);
    };

    var tdNome = document.createElement('td');
    tdNome.textContent = nome;

    var tdAutor = document.createElement('td');
    tdAutor.textContent = autor;

    var tdAno = document.createElement('td');
    tdAno.textContent = ano;

    var tdPeriodo = document.createElement('td');
    tdPeriodo.textContent = periodo;

    var tdTipo = document.createElement('td');
    tdTipo.textContent = tipo;

    var tdAcoes = document.createElement('td');
    var btnExcluir = document.createElement('button');
    btnExcluir.type = 'button';
    btnExcluir.textContent = 'Excluir';
    btnExcluir.onclick = function(event) {
        excluirLinha(event, this);
    };
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdAutor);
    tr.appendChild(tdAno);
    tr.appendChild(tdPeriodo);
    tr.appendChild(tdTipo);
    tr.appendChild(tdAcoes);

    tabelaCorpo.appendChild(tr);

    // Limpa os campos do formulário após registrar
    document.getElementById('form-obra').reset();
}
