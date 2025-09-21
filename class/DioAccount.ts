export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (quantity: number): void => {
    if(this.validateStatus()){
      this.balance += quantity
      console.log(`Voce depositou ${quantity} ao seu saldo`)
    }
  }

  withdraw = (valueToWithdraw: number): void => {
    if(this.validateStatus()) {
      if (this.balance < valueToWithdraw)
        console.log('Operacao invalida, valor do saque deve ser menor ou igual ao do seu saldo')
      else {
        this.balance -= valueToWithdraw
        console.log(`Voce sacou ${valueToWithdraw} do seu saldo`)
      }
    }
  }

  getBalance = (): void => {
    console.log(`Seu saldo total: ${this.balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}