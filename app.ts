import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Samuel', 8970)
console.log(peopleAccount)

// saque ocorre
peopleAccount.deposit(10)
peopleAccount.withdraw(5)

// saque não ocorre
peopleAccount.deposit(10)
peopleAccount.withdraw(20)
peopleAccount.getBalance();