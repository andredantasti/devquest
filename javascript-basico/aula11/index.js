/*
    function nomeDaFuncao(){
        <bloco de execução>
    }
        
    nomeDaFuncao()
    */

    /*
        function nomeDaFuncao(parametro1, parametro2...){
        <bloco de execução>
    }
        
    nomeDaFuncao(parametro1, parametro2...)
    
    */
/*
    function incentivarQuester(){
        alert('Muito bem, mininis você chegou ao JS, continue assim animal de teta!')
    }

   incentivarQuester();
*/
   function soma(numero1, numero2){
        return numero1 + numero2;
   }
   let resultadoDaSoma = soma(2, 5);

   console.log(resultadoDaSoma);

   resultadoDaSoma = soma(resultadoDaSoma, 10)
   console.log(resultadoDaSoma);