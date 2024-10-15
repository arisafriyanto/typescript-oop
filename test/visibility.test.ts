describe("Visibility", () => {
    class Counter {
        // private counter: number = 0;
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }

    it("should support visibility class private", () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
        // counter.counter = 10; // * not working
    });

    it("should support visibility class protected", () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCounter());
    });
});
