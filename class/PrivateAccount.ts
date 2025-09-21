import { DioAccount } from "./DioAccount"

export class PrivateAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getBonusDeposit = (value: number): void => {
    if(this.validateStatus())
    {
      let bonusValue = value + 10
      this.deposit(bonusValue)
      console.log(`Seu deposito com bonus totaliza: ${bonusValue}.`);
    }
  }
}