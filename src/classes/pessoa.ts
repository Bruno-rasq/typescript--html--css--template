class Pessoa {
	nome         : string
	segundo_nome : string
	idade        : number

	constructor(nome : string, segundo_nome: string, idade: number){
		this.nome = nome
		this.idade = idade
		this.segundo_nome = segundo_nome
	}

	get nomeCompleto (): string {
		return `${this.nome} ${this.segundo_nome}`
	}

	comprimentar (): void {
		console.log(`${this.nome} diz, Olá!`)
	}
}

export default Pessoa