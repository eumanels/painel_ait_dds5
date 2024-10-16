import { createAula } from "../models/AulaModel.js";

export async function criarAula(req,res) {
    console.log('AulaController criarAula');
    
    //Criando constante com requisição
    const aula = req.body;

    
    //Tentando criar aula
    try {
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }


}

export async function mostrarAulas(req,res){
    return res.status(200).json(
        [
            {
              "id": "1300",
              "data": "2024-10-09",
              "data_hora_inicio": "13:30",
              "data_hora_fim": "17:30",
              "turma": "EMP-NBM-03",
              "instrutor": "AMANDA DIAS",
              "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
              "ambiente": "VTRIA-3-SALA-3004",
              "chave": null
              
            }
        ]
    );
}