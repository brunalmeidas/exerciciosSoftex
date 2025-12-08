import { Animal } from "./animal";

export class Animal2 extends Animal {
    public habitat: string;

    constructor(habitat: string, nome: string, idade: number) {
        super(nome, idade);
        this.habitat = habitat;
    }

    comer() {}
}
