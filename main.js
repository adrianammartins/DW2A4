import Heroi from './heroi.class.js';
import {exibirNomeHeroi} from './heroi.class.js';
import {exibirPoderHeroi as poder} from './heroi.class.js';

const heroi = new Heroi('SuperMan', 'Visão Raio-X')
console.log('----------------Export default----------------')
console.log(heroi.nome);
console.log(heroi.poder);

console.log('----------------Export para exibir nome e poder do heroi ----------------')

exibirNomeHeroi(heroi);
//utilizando apelido para o metodo do export
poder(heroi);


