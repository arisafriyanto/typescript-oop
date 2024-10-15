describe("Inheritance", () => {
    // * parrent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {}
    class Director extends Manager {}

    it("should support inheritance", () => {
        const employee = new Employee("Aris");
        console.info(employee.name);

        const manager = new Manager("Jasmine");
        console.info(manager.name);

        const director = new Director("Jane");
        console.info(director.name);
    });
});
