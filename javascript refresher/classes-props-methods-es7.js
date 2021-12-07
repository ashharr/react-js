class Human {
    gender = "male";
    printGender = () => {
        console.log(this.gender);
    }
}


class Person extends Human{
     name = 'Ashhar';
     gender = "female"
    printMyName = () =>  {
        console.log(this.name);
    }
}

const person = new Person("Ashhar");
person.printMyName();
person.printGender();