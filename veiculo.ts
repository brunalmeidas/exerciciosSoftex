export class Veiculo {
    public roda: number;
    public placa: string;
    
    constructor(roda: number, placa: string){
        this.roda = roda;
        this.placa = placa;
    }

    ligar() {
        console.log("Veículo ligado!");
    }
}
