(function () {
    "use strict";
    //modulo
    angular.module('listaTarefasApp', []);

    //controller
    angular.module('listaTarefasApp')
        .controller("listaTarefasController", listaTarefasController);

    listaTarefasController.$inject = ['$scope'];
    
    function listaTarefasController($scope) {
        var vm= this;
        vm.tarefas = [
            { text: "Java", feito: true },
            { text: "Programação orientada a objeto(", feito: true },
            { text: "Banco de dados", feito: true },
            { text: "HTML-5", feito: true },
            { text: "CSS-3", feito: true },
            { text: "Java Script", feito: true },
            { text: "Design pattern (mvc)", feito: true },
            { text: "spring framework", feito: true },
            { text: "AngularJS", feito: false },
            { text: "Teste Unitário", feito: false },
            { text: "React", feito: false }
        ];
        
        vm.restam = restam;
        vm.addTarefa = addTarefa;
        vm.arquivar = arquivar;
        function restam(){
            var count = 0
            angular.forEach(vm.tarefas, function(trf){
                if (!trf.feito) count ++;
            });
            return count;
        }
       
        function addTarefa(){
            if(vm.tarefaText != null){
            vm.tarefas.push({text: vm.tarefaText, feito:false});
            vm.tarefaText= null;
            } else window.alert("Tarefa não pode estar vazia") 

        }
        function arquivar(){
         /*   var oldTarefas = vm.tarefas;
            vm.tarefas=[];
            angular.forEach(oldTarefas,function(trf){
                if(!trf.feito) 
                    vm.tarefas.push(trf);
            })
                */
            vm.tarefas = vm.tarefas.filter(function(trf){
                return (!trf.feito)
            })
        }
    };

})();