export default class SuperHero{
	constructor(nome, poder){
		this.nome = nome;
		this.poder = poder;
	}
}

export function exibirNomeHeroi(heroi){
	console.log('O nome do herói é: ' + heroi.nome);
}

export function exibirPoderHeroi(heroi){
	console.log('O poder do herói é:' + heroi.poder);
}