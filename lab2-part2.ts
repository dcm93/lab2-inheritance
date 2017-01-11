class SavingsAccount{
    private initialBalance:number;
    private ownerName:string;
    private numWithdrawals:number;
    constructor(theBalance = 0, theOwner:string){
        this.initialBalance = theBalance;
        this.ownerName = theOwner;
        this.numWithdrawals = 0;
    }
    public deposit(incoming:number):void{
         this.initialBalance= this.initialBalance + incoming;
        

    }
    public withdraw(outgoing:number):void{
        if(this.numWithdrawals < 3){
            this.initialBalance = this.initialBalance - outgoing;
            this.numWithdrawals++; 
        } else {
            console.log('You have gone over your withdrawals limit. Goodbye!');
        }
            
    }

    public checkBalance():void{
        console.log(`Bank Account Holder: ${this.ownerName}\nCurrent Balance: $${this.initialBalance}`);
    }

}

var momAccount = new SavingsAccount(2500, "Maria Rodriguez");
momAccount.checkBalance();
console.log('Amount to be deposited: $500');
momAccount.deposit(500);
momAccount.checkBalance();
console.log('Amount to be withdrawn: $500');
momAccount.withdraw(500);
momAccount.checkBalance();
console.log('Amount to be withdrawn: $500');
momAccount.withdraw(500);
momAccount.checkBalance();
console.log('Amount to be withdrawn: $500');
momAccount.withdraw(500);
momAccount.checkBalance();
console.log('Amount to be withdrawn: $500');
momAccount.withdraw(500);

