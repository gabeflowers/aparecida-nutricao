var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0 ) {
        exibeMensagemDeErros(erros);
        return;
    }

    adcionaPacienteNaTabela(paciente);

    form.reset();
    // limpando tag de erros depois que adcionar pct
    var mensagensDeErro = document.querySelector("#mensagem-erro");
    mensagensDeErro.innerHTML = "";
})

function exibeMensagemDeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    // limpando tag de erros, sempre que gerar novos erros
    ul.innerHTML = "";

    // criando tag li toda vez que tiver um erro 
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    //validando nome do paciente
    if(paciente.nome.length == 0){
        erros.push("o nome nao pode ser em branco");

    }
    //validando peso atraves de uma função
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é invalido");

    } 
    //validando altura atraves de uma função
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Inválida");

    }
    //validando se gordura esta em branco
    if( paciente.gordura.length == 0){
        erros.push("Gordura é invalida"); 

    }
    //validando se peso esta em branco
    if(paciente.peso.length == 0){
        erros.push("o peso nao pode ser em branco");

    }
    //validando se altura esta em branco
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");

    }

    return erros;
}

function adcionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}