interface Hasfullname {

    firstName: string;
    lastName: string;
}

class Room<Type extends Hasfullname>{

        public occupants: Array<Type> = new Array<Type>();
    
        addOccupant(newOccupant: Type) {
            this.occupants.push(newOccupant);
            console.log(this.occupants)
        }
    
        emptyRoom(): void {  
         var currentOccupants = this.occupants;

            this.occupants.forEach(() => {
                this.occupants.pop()
            })       
        }

        removeAnoccupant<Type extends Hasfullname> (occupantToRemove: Type){
            let checkIfFound: Boolean = false
            for (let index = 0; index < this.occupants.length; index++) {
                if(occupantToRemove.firstName == this.occupants[index].firstName && occupantToRemove.lastName == this.occupants[index].lastName){
                this.occupants.splice(index, 1)
                checkIfFound = true;
                break;     
            }  
            }
            if(checkIfFound != true){
                console.log("there is no one here named " + occupantToRemove.firstName)
            }
              
        }
    }

    export default Room;


