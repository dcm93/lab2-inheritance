class CheckingsAccount{
    private initialBalance:number;
    private ownerName:string;
    constructor(theBalance = 0, theOwner:string){
        this.initialBalance = theBalance;
        this.ownerName = theOwner;
    }
    public deposit(incoming:number):void{
         this.initialBalance= this.initialBalance + incoming;
    }
    public withdraw(outgoing:number):void{
        this.initialBalance = this.initialBalance - outgoing;
    }

    public checkBalance():void{
        console.log(`Bank Account Holder: ${this.ownerName}\nCurrent Balance: $${this.initialBalance}`);
    }

}

var momsAccount = new CheckingsAccount(2500, "Maria Rodriguez");
var myAccount = new CheckingsAccount(0, "Domenica Mata");
momsAccount.checkBalance();
myAccount.checkBalance();
console.log('Amount to be deposited: $500');
momsAccount.deposit(500);
momsAccount.checkBalance();
console.log('Amount to be withdrawn: $500');
momsAccount.withdraw(500);
momsAccount.checkBalance();



