import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validatable/validatable/validatable";
import InstanceInfer from "@dikac/t-validator/instance/infer";

/**
 *  validate array length
 */
export default class Length<
    MessageType,
    ValidatorType extends Validator<number, number, boolean, boolean, Instance<number, MessageType>>
> implements Validator<
    any[],
    any[],
    boolean,
    boolean,
    Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>
> {

    constructor(
        public validator : ValidatorType
    ) {
    }

    validate<Argument extends any[]>(value: Argument): Return<any[], Argument, any[], Readonly<Instance<any[], MessageType> & Validatable<InstanceInfer<ValidatorType>>>> {

        let validatable = this.validator.validate(value.length);

        return {
            get validatable() {
                return <InstanceInfer<ValidatorType>> validatable;
            },
            get value() {
                return value;
            },
            get message() {
                return validatable.message;
            },
            get valid() {
                return validatable.valid;
            }
        }
    }
}

