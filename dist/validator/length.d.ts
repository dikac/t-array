import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import Validatable from "@dikac/t-validatable/validatable/validatable";
import InstanceInfer from "@dikac/t-validator/instance/infer";
export default class Length<MessageT, ValidatorT extends Validator<number, number, boolean, boolean, Instance<number, MessageT>>> implements Validator<any[], any[], boolean, boolean, Readonly<Instance<any[], MessageT> & Validatable<InstanceInfer<ValidatorT>>>> {
    validator: ValidatorT;
    constructor(validator: ValidatorT);
    validate<Argument extends any[]>(value: Argument): Return<any[], Argument, any[], Readonly<Instance<any[], MessageT> & Validatable<InstanceInfer<ValidatorT>>>>;
}
