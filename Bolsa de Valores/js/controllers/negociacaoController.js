import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    #campoData;
    #campoQuantidade;
    #campoValor;

    constructor(){
        this.#campoData = document.getElementById('data');
        this.#campoQuantidade = document.getElementById('quantidade');
        this.#campoValor = document.getElementById('valor');
    }

    criarNegociacao(){
        let data = new Date(this.#campoData.value  + "T00:00:00-03:00").toLocaleDateString();
        let quantidade = parseInt(this.#campoQuantidade.value);
        let valor = parseFloat(this.#campoValor.value);
        let novaNegociacao = new Negociacao(data, quantidade, valor);
        console.log(novaNegociacao);
    }
}