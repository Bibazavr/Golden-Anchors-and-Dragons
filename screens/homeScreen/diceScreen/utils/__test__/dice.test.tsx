import {diceDrop, getRndInteger} from "../dice";

it('diceDrop10 not toBeNull', () => {
    const drop = diceDrop(10);

    expect(drop).not.toBeNull();
});

it("getRndInteger", () => {
    const rnd = getRndInteger(1, 1);

    expect(rnd).toEqual(1);
})