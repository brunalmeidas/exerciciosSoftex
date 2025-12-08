import { Pessoa } from "./pessoa";

export class Pessoa1 extends Pessoa {
    public pessoafisica: string;

    constructor(pessoafisica: string, nome: string, idade: number) {
        super(nome, idade);
        this.pessoafisica = pessoafisica;
    }

    informacao() {
        console.log(`Pessoa física: ${this.pessoafisica}`);
    }
}
