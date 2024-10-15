describe("Method overriding", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    // class Manager extends Employee {
    //     sayHello(name: string): void {
    //         console.info(`Hello ${name}, my name is ${this.name}. I am your manager`);
    //     }
    // }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name); // * (super method) call method parent
            console.info(`And, I am your manager`);
        }
    }

    it("should support method overriding", () => {
        // const employee = new Employee("Aris");
        // employee.sayHello("Jasmine");

        // const manager = new Manager("Aris");
        // manager.sayHello("Jasmine");

        const manager = new Manager("Aris");
        manager.sayHello("Jasmine");
    });
});
