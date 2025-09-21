import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrivateAccount } from './class/PrivateAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Samuel', 8970)
console.log(peopleAccount)

// saque ocorre
peopleAccount.deposit(10)
peopleAccount.withdraw(5)

// saque não ocorre
peopleAccount.deposit(10)
peopleAccount.withdraw(20)
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('Empresa', 3456)
console.log(companyAccount)
companyAccount.deposit(10000)
companyAccount.getLoan(50000)
companyAccount.getBalance()

const privateAccount: PrivateAccount = new PrivateAccount('Lucas', 6598)
console.log(privateAccount)
privateAccount.getBonusDeposit(100)
privateAccount.getBalance()