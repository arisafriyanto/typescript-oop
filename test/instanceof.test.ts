describe("Instanceof", () => {
    class Employee {}

    class Manager {}

    it("should support instanceof", () => {
        const jasmine = new Employee();
        const aris = new Manager();

        // console.info(typeof jasmine); // * object
        // console.info(typeof aris); // * object

        expect(jasmine instanceof Employee).toBe(true);
        expect(jasmine instanceof Manager).toBe(false);

        expect(aris instanceof Employee).toBe(false);
        expect(aris instanceof Manager).toBe(true);
    });
});
