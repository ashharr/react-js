class Human {
    constructor() {
        this.gender = "male";
    }
    printGender(){
        console.log(this.gender);
    }
}


class Person extends Human{
    constructor(name) {
        super()
        this.name = name;
        this.gender = "female"
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person("Ashhar");
person.printMyName();
person.printGender();