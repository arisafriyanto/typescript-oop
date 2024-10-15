import { MathUtil } from "../src/math-util";

describe("Namespace", () => {
    it("should support namespace", () => {
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });
});
