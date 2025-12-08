import { Animal } from "./animal";

export class Animal1 extends Animal {
    public especie: string;

    constructor(especie: string, nome: string, idade: number) {
        super(nome, idade);
        this.especie = especie;
    }

    mover() {}
}
