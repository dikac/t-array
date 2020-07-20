import ResetFlat from "../reset";
// import Recursive from "./recursive";

export default function Reset<Argument extends unknown[]/*Recursive<unknown>*/>(argument : Argument) : Argument {

   let buffer =  ResetFlat(argument);

   for (let [index, value] of argument.entries()) {

       if(Array.isArray(value)) {

           buffer[index] = ResetFlat(argument);
       }
   }


   return buffer;
}
