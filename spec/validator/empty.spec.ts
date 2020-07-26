import Empty from "../../dist/validator/empty";
import EmptyMessage from "../../dist/validatable/string/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<unknown[], [boolean, string]>();
map.set([], [true, 'empty array']);
map.set([1], [false, 'not empty array']);
map.set([1,2], [false, 'not empty array']);


for(let [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            let validator = new Empty(true, EmptyMessage);
            let validatable = validator.validate(value);
            expect(validatable.valid).toBe(valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe(`array is empty`);
            } else {
                expect(validatable.message).toBe(`array must empty`);
            }
        });

    });
    //
    // describe('not empty', () => {
    //
    //     it(message, ()=>{
    //
    //         let validator = new Empty(false, EmptyMessage);
    //         let validatable = validator.validate(value);
    //         expect(validatable.valid).toBe(!valid);
    //         expect(validatable.value).toBe(value);
    //
    //         if(validatable.valid) {
    //             expect(validatable.message).toBe(`array is not empty`);
    //         } else {
    //             expect(validatable.message).toBe(`array must not empty`);
    //         }
    //     });
    // });

}
