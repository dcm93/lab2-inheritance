export class BankAccount{
    private initialBalance:number;
    private owner:string;
    
    constructor(theBalance:number, theOwner:string){
        this.initialBalance = theBalance;
        this.owner = theOwner;
    }

    public deposit(incoming:number):void{
         this.initialBalance= this.initialBalance + incoming;
    }

     public withdraw(outgoing:number):void{
        this.initialBalance = this.initialBalance - outgoing;
    }

    public checkBalance():void{
        console.log(`Bank Account Holder: ${this.owner}\nCurrent Balance: $${this.initialBalance}`);
    }

}

export{BankAccount as Account};
var theParent = new BankAccount(350, "Daniel");
theParent.checkBalance();
for(var i = 0; i <= 3; i++){
    theParent.withdraw(50);
}
theParent.checkBalance();