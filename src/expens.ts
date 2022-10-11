interface  ExpenseItem{
    id: Number,
    title:String,
    cost:Price
}
interface  Price{
     number:Number  ,
     curency:curency 
}
interface  iexpense{
    Expenses:ArrayList<ExpenseItem>,
    finalCurrency: curency,
    add(item:ExpenseItem):Boolean,
    get(index:number ):ExpenseItem | null
    getTotal():string
    remove(id:number):boolean

}
type curency = "ARS" | "USD"
class ArrayList<T> { 
    private  items:T[] 
    constructor(){
        this.items = []
    }

    add(item:T){
        this.items.push(item)
      }
      get(index:number):T | null{
        const item:T[] = this.items.filter((x:T ,i:Number)=>{ return i === index})
        if(item.length===0){
            return null
        }else{
            return item[0]
        }
      }

      createFerom(value:T[]):void{
        this.items = [...value]
      }
      getAll():T[]{
        return this.items;
      }
}

class Expense implements iexpense {
    Expenses: ArrayList<ExpenseItem>
    finalCurrency: curency



    private count = 0

    constructor(curency:curency){
        this.finalCurrency = curency;
        this.Expenses = new ArrayList<ExpenseItem>
    }
    add(item: ExpenseItem): Boolean {
        item.id = this.count
        this.count++
        this.Expenses.add(item)
        return true 
    }
    get(index:Number): ExpenseItem | null {
        return this.Expenses.get(index)
    }
    getIem():ExpenseItem[]{
       return this.Expenses.getAll() 
    }
    getTotal(): string {
        const total = this.Expenses.getAll().reduce((acc,item)=>{
            return acc += this.converCurenci(item, this.finalCurrency)
        },0);
    }
    remove(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    private converCurenci(item:ExpenseItem, curency:curency){
        switch(item.cost.curency){
            case "USD":
                switch(curency){
                    case "ARS":
                     return (item.cost.number)* 150;
                     break
                     default:
                        return item.cost.number
                }
                break
        }
        case "ARS":
            switch(curency){
                case "ARS":
                 return item.cost.number   * 150
                 break
                 default:
                    return 0
            }
            break
    }
}