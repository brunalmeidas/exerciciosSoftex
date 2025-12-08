import { Pessoa } from "./pessoa";

export class Pessoa2 extends Pessoa {
    public pessoafisica: string;

    constructor(pessoafisica: string, nome: string, idade: number) {
        super(nome, idade);
        this.pessoafisica = pessoafisica;
    }

    informacao() {
        console.log(`Pessoa 2: ${this.pessoafisica}`);
    }
}
