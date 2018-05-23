import Employee from './Employee';
import WorkerInterface from "./workerinterface"

class Manager extends Employee{
    public subordinates? : Array<Employee> = new Array<Employee>()
    constructor(firstName: string, lastName: string, department: string, salary: number){
   super(firstName, lastName, department, salary)
  
    }

    

    greeting(){
        console.log("Hi, I’m " +this.firstName +  "and I manage the " + this.department +  "department")
    }

    getNewEmployee(subordinate: Employee){
        this.subordinates.push(subordinate)
    }
        
    fireSubordinates(){
        for (let index = 0; index < this.subordinates.length; index++) {
            console.log("sorry ${subordinates[i]}, you are fired..");
            
        }
    }

}

export default Manager;