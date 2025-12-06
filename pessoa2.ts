import { pessoa } from "./pessoa";

export class Pessoa2 extends pessoa{
    public pessoafisica: string;


    construtor(pessoafisica, nome, idade) {
        super (nome, idade)
        this.pessoafisica = pessoafisica

    
    }
    informação(){}
}