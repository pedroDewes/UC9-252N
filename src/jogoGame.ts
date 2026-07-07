

class JogoGame {

    public nome: string;
    public plataforma: string;
    public gereno: string;
    public ValorDiaria: number;
    public disponivel: boolean

        constructor(nome: string, plataforma: string, genero: string, ValorDiaria: number, disponivel: boolean) {

            this.nome = nome;
            this.plataforma = plataforma;
            this.gereno = genero;
            this.ValorDiaria = ValorDiaria;
            this.disponivel = disponivel
        }
}


class Cliente {

    public nome : string;
    public idade : number;
    public telefone : string;
    public email : string;

constructor(nome : string, idade: number, telefone: string, email: string) {

    this.nome = nome;
    this.idade = idade;
    this. telefone = telefone;
    this.email = email
}
}


class Locacao {
    public jogo: string;
    public cliente: string;
    public dataLocacao: string;
    public dataDevolucao: string

    constructor(jogo: string, cliente: string, dataLocacao: string, dataDevolucao: string) {

        this.jogo = jogo;
        this.cliente = cliente;
        this.dataLocacao = dataLocacao;
        this.dataDevolucao = dataDevolucao

        
        
    }
    exibirLocacao(): void {
        console.log("Jogo:", this.jogo);
        console.log("Cliente:", this.cliente);
        console.log("Data da locação:", this.dataLocacao);
        console.log("Data da devolução:", this.dataDevolucao);
    }

   
verificarAtraso(): void {

    const dataAtual = "06/07/26";

    if (this.dataDevolucao < dataAtual) {
        console.log("Status: Locação em atraso.");
    } else {
        console.log("Status: Locação dentro do prazo.");
    }
}
}






const jogo1 = new JogoGame('Homem Aranha', 'PlayStation', 'Ação', 12, true);
const jogo2 = new JogoGame('God of War', 'PlayStation', 'Ação', 15, true);
const jogo3 = new JogoGame('GTA6', 'Xbox, PS, PC', "Aventura/Ação", 25, true);

const cliente1 = new Cliente('Pedro', 17, "(51)9992626-43", "pedrolimadewes@gmail.com");
const cliente2 = new Cliente('Vinicius', 17, '(51)9455534-67', 'vinicardoso@gmail.com');

const locacao1 = new Locacao('God of War', 'Rodrigo', '02/03/26', '06/03/26');
const locacao2 = new Locacao('GTA6', 'João', '05/07/26', '13/08/26');




console.log('  ------------------------')
console.log('====== LOCAÇÂO 1 ======')
console.log('  ------------------------')
locacao1.exibirLocacao();
locacao1.verificarAtraso();

console.log('  ------------------------                     ');
console.log("====== LOCAÇÃO 2 ======");
console.log("  ------------------------                     ");

locacao2.exibirLocacao();
locacao2.verificarAtraso();







