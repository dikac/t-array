import Or from "../../dist/message/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


let messages = [
    {message:'a'},
    {message:'b'},
    {message:'c'},
    {message:'d'},
    {message:'e'},
];

let join = Or(messages);
it('check data', ()=>{

   expect(join[0].message).toBe('a');
   expect(join[1].message).toBe('b');
   expect(join[2].message).toBe('c');
   expect(join[3].message).toBe('d');
   expect(join[4].message).toBe('e');
   expect(join[5]).toBeUndefined();

});


it('check message', ()=>{

   expect(join.message).toBe('a or b or c or d or e')

});


it('add value', ()=>{

    join.push({message:'f'});
   expect(join.message).toBe('a or b or c or d or e or f')

});

