import { useEffect, useState } from "react";
import styles from './Relogio.module.css';

// Declarando função relógio
function Relogio(){
    // Declarando hora como estado
    const [hora, setHora] = useState('');

    // Chamando função pós carregamento
    useEffect(()=>{
        // Chamando função de atualizar horário primeira vez
        atualizaHora();

        // Declarando intervalo de 1 segundo para atualização da hora
        const intervalo = setInterval(atualizaHora, 1000);
        return()=>{
            clearInterval(intervalo);
        }
    }, []);

    //  Declarando função que atribui a hora, minutos e segundos atuais
    function atualizaHora(){
        // Declarando objeto do tipo Date
        const agora = new Date();
        // Pegando hora minutos e segundos
        const horaCompleta = agora.toLocaleTimeString('pt-br', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
        // Atualizando o estado para hora, minutos e segundos atuais
        setHora(horaCompleta);
    }

    return(
        // Retornando uma div com a hora minutos e segundos da maneira correta
        <div className={styles.relogio}>{hora}</div>
    )
}

export default Relogio;