import ResetFlat from "../reset";

export default function Reset<Argument extends unknown[]>(argument : Argument) : Argument {

   let buffer =  ResetFlat(argument);

   for (let [index, value] of argument.entries()) {

       if(Array.isArray(value)) {

           buffer[index] = ResetFlat(argument);
       }
   }


   return buffer;
}
