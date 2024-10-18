import { createAula } from "../models/AulaModel.js";
import { showAulas } from "../models/AulaModel.js";
import { updateAula } from "../models/AulaModel.js";
import { deleteAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log('AulaController criarAula');

    //Criando constante com requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);


    //Tentando criar aula
    try {
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }


}

export async function mostrarAulas(req, res) {
    const aula = req.body;

    try {
        const [status, resposta] = await showAulas(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}

export async function atualizarAula(req, res) {
    console.log('AulaController atualizarAula');
    const aula = req.body;
    const {id} = req.params;

    try {
        const [status, resposta] = await updateAula(aula, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function excluirAula(req, res) {
    console.log('AulaController excluirAula');
    const {id} = req.params;

    try {
        const [status, resposta] = await deleteAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}