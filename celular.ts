export class Celular {
    public marca: string;
    public modelo: string;
    public armazenamento: number;

    constructor(marca: string, modelo: string, armazenamento: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligando...`);
    }

    tirarFoto() {
        console.log(`${this.modelo} tirou uma foto!`);
    }
}
