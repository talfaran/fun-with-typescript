import WorkerInterface from "./workerinterface"

class Customer implements WorkerInterface {

public firstName: string;
public lastName: string;
public companyName: string;

constructor(firstName: string, lastName: string, companyName: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
}

public static getFullName(firstName: string, lastName: string): string{

    let fullName = firstName + lastName;
    return fullName;

}

greeting(){
    console.log("hi everyone, im you suctomer named " + this.firstName)
}

}

export default Customer;