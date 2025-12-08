import { Veiculo } from "./veiculo";

export class Formula1 extends Veiculo {
    public tamanho: number;

    constructor(tamanho: number, roda: number, placa: string) {
        super(roda, placa);
        this.tamanho = tamanho;
    }

    velocidade() {
        console.log("A Fórmula 1 está muito rápida!");
    }
}
