import { veiculo } from "./veiculo";

export class Formula1 extends veiculo{
    public tamanho: Number;

    construtor(tamanho,roda,placa){
        super(roda,placa)
        this.tamanho = tamanho
    }

    velocidade(){}
}