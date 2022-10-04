//selecionando campo de filtro do html
var campoFiltro = document.querySelector('#filtrar-tabela');
//escutando evento de digitação no input e realizando uma funçao
campoFiltro.addEventListener("input", function(){
    
    //selecionando todos os pacientes e transformando em um array (pacientes)
    var pacientes = document.querySelectorAll(".paciente");
    var that = this;
    if(this.value.length > 0){
        pacientes.forEach(function(paciente, i){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            if(!nome.includes(that.value)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        });       
    }else{
        pacientes.forEach(function(paciente, i){
             paciente.classList.remove('invisivel');
        })
    }

});



































