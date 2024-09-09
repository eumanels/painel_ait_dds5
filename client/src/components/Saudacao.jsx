import { useEffect, useState } from "react";

// Criando função saudacao
function Saudacao(){
    // Criando estado da saudação
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');

    // Chamando função de saudação e definindo um intervalo de 1 segundo
    useEffect(()=>{
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao, 1000);
        return()=>{
            clearInterval(intervalo);
        }
    },[])

    // Criando texto da saudação do cabeçalho
    
    function atualizaSaudacao(){
      // Declarando objeto do tipo date
      const agora = new Date();
      // Declarando hora em inteiro
      const hora = agora.getHours();
      // Declarando dia da semana em inteiro iniciado em domingo que retorna 0 e sabado que retorna 6
      const dia = agora.getDay();
      // Declarando variável do texto de saudação
      let textoSaudacao =  '';
      // Definindo array com dias da semana
      const diaSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
      ];

      // Adicionando o dia da semana no textoSaudação
      textoSaudacao += diaSemana[dia];
      // Adicionando saudação ao textoSaudação
      if(hora >= 18){
        textoSaudacao += 'Boa Noite'
      }else if(hora >= 12){
        textoSaudacao += 'Boa Tarde'
      }else{
        textoSaudacao += 'Bom Dia'
      }
      // Chamando função de atribuição
      setSaudacaoPeriodo(textoSaudacao);
    }
    
    return(
        <div>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;