var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector('#erro-ajax');

        //tratar erro durante busca no servidor
        if( xhr.status == 200){
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adcionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();
});