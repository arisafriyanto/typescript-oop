describe("Parameter properties", () => {
    class Person {
        constructor(public name: string = "") {}
    }

    it("should support parameter properties", () => {
        const person = new Person("Aris");
        console.info(person.name);

        person.name = "Jasmine";
        console.info(person.name);
    });
});
