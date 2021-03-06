import Empty from "../../dist/validator/not-empty";
import EmptyMessage from "../../dist/validatable/string/not-empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<unknown[], [boolean, string]>();
map.set([], [true, 'empty array']);
map.set([1], [false, 'not empty array']);
map.set([1,2], [false, 'not empty array']);


for(let [value, [valid, message]] of map) {

    describe('not empty', () => {

        it(message, ()=>{

            let validator = new Empty(EmptyMessage);
            let validatable = validator.validate(value);
            expect(validatable.valid).toBe(!valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {

                expect(validatable.message).toBe(`Array is not empty array.`);

            } else {

                expect(validatable.message).toBe(`Array is empty array.`);
            }
        });
    });

}
