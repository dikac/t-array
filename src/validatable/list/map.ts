import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./recursive";
import ThrowableValue from "./assert/throwable/value";
import ThrowableObjectValue from "../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
//import Recursive from "../../recursive/recursive";
import {List} from "ts-toolbelt";

export default function Map<
    Validators extends Validator[]// Recursive<Validator>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopInvalid : true
) : List.Partial<Validators>;

export default function Map<
    Validators extends Validator[]// Recursive<Validator>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopInvalid : false
) : RecursiveInferReturn<Validators>;

export default function Map<
    Validators extends Validator[]// Recursive<Validator>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>,
    stopInvalid : boolean
) : RecursiveInferReturn<Validators>|List.Partial<Validators> {

    let object : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];

       // if(ValidatorType(validator)) {

            object[property] = validator.validate(value);

            if(stopInvalid && !object[property].valid) {

                return object;
            }

          //  continue;
       // }
       //
       //  if(globalThis.Array.isArray(validator)) {
       //
       //      if(globalThis.Array.isArray(value)) {
       //
       //          // @ts-ignore
       //          object[property] =
       //              Map(validator,  <RecursiveInferArgument<Validators>>value, <any>stopInvalid);
       //
       //      } else {
       //
       //          throw ThrowableObjectValue(property, 'array');
       //      }
       //
       //  } else {
       //
       //      throw ThrowableValue(property);
       //  }

    }

    return  object;
}
