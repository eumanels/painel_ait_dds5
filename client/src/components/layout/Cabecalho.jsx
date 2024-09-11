import Relogio from "./Relogio.jsx";
import Saudacao from "./Saudacao.jsx";
import styles from './Cabecalho.module.css';

function Cabecalho(){
    return(
        <div className={styles.cabecalho}>
            <Saudacao/>
            <Relogio/>
        </div>
    )
}

export default Cabecalho;