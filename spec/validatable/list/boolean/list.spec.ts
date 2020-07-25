import Type from "../../../../dist/validatable/list/boolean/list";
import Validatable from "@dikac/t-validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatibility', () => {

    describe('explicit compatibility', () => {

        let list = [
            {valid:true},
            {valid:false},
            {valid:true},
            {valid:true},
        ];

        if(Type(list)) {

            let validatable : Validatable;

            validatable = list[0];
            validatable = list[1];
            validatable = list[2];
            validatable = list[3];

            // TODO IF POSSIBLE FIX EXPLICIT
            validatable = list[4];
        }
    });

    describe('implicit compatibility', () => {

        let list = [
            {valid:true},
            {valid:false},
            {valid:true},
            {valid:true},
        ];

        if(Type<[Validatable, Validatable, Validatable, Validatable]>(list)) {

            let validatable : Validatable;

            validatable = list[0];
            validatable = list[1];
            validatable = list[2];
            validatable = list[3];

            // @ts-expect-error
            validatable = list[4];
        }
    });

});


describe('check value', function () {


    it('implicit', function () {

        let list = [
            {valid:true},
            {valid:false},
            {valid:true},
            {valid:true},
        ];

        if(Type<[Validatable, Validatable, Validatable, Validatable]>(list)) {

            expect(list[0].valid).toBe(true);
            expect(list[1].valid).toBe(false);
            expect(list[2].valid).toBe(true);
            expect(list[3].valid).toBe(true);

        } else {

            fail('value should valid');
        }
    });

    it('explicit', function () {

        let list = [
            {valid:true},
            {valid:false},
            {valid:true},
            {valid:true},
        ];

        if(Type(list)) {

            expect(list[0].valid).toBe(true);
            expect(list[1].valid).toBe(false);
            expect(list[2].valid).toBe(true);
            expect(list[3].valid).toBe(true);

            expect(<any>list[4]).toBe(undefined);

        } else {

            fail('value should valid');
        }
    });

});
