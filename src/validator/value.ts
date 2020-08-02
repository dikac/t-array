import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./return/list/value";
import PartialUnion from "./return/list/partial-union";
import ValidatableValue from "../validatable/value-callback";
import Construct from "@dikac/t-validator/return/return";

export default class Value<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Validator<
    BaseT,
    ValueT,
    ValidatableValue<BaseT, ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>
> {
    constructor(
        public validators : ValidatorsT,
        public validation : Function<[PartialUnion<ValidatorsT>], ValidatableT>,
        public message : Function<[PartialUnion<ValidatorsT>], MessageT>
    ) {
    }

    validate<Argument extends BaseT>(value: Argument) : Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>> {

        let validator = new ValidatableValue(
            value,
            this.validators,
            (value, validators) => ValidateValue<BaseT, ValidatorsT>(value, validators, true),
            this.validation,
            this.message
        );

        return <Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>>> validator;
    }
}



