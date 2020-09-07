/**
 * get the first non 'undefined' value
 *
 * @param values
 */
export default function First <Value>(values : Value[]) : Value|undefined {

     let first = values[0];

     if(first === undefined) {

          for(const value of values) {

               if(value !== undefined) {

                    return value;
               }

          }
     }

     return first;
}
