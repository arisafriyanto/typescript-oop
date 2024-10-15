describe("Polymorphism", () => {
    class Employee {
        constructor(public name: string = "") {}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    // * method polymorphism
    function sayHello(employee: Employee): void {
        // * saat melakukan type cast, pastikan posisi child class/turunan class paling bawah dilakukan pengecekan di awal
        // * instanceof bukan hanya mengecek class yang didefinisikan tetapi, mengecek juga apakah turunan dari suatu parent
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    it("should support polymorphism", () => {
        let employee: Employee = new Employee("Aris");
        console.info(employee);

        employee = new Manager("Aris");
        console.info(employee);

        employee = new VicePresident("Aris");
        console.info(employee);
    });

    it("should support method parameter polymorphism and type cast", () => {
        sayHello(new Employee("Aris"));
        sayHello(new Manager("Jasmine"));
        sayHello(new VicePresident("Jane"));
    });

    it("should support method parameter polymorphism and type cast but wrong", () => {
        sayHelloWrong(new Employee("Aris"));
        sayHelloWrong(new Manager("Jasmine"));
        sayHelloWrong(new VicePresident("Jane"));
        // * Hasilnya Jane ada manager, karena ketika pengecekan, VicePresident adalah turunan dari Manager
    });
});
