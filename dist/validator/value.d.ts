import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import PartialUnion from "./return/list/partial-union";
import ValidatableValue from "../validatable/value-callback";
import Construct from "@dikac/t-validator/return/return";
export default class Value<BaseT = unknown, ValueT extends BaseT = BaseT, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], ValidatableT extends Validatable = Validatable, MessageT = unknown> implements Validator<BaseT, ValueT, ValidatableValue<BaseT, ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>> {
    validators: ValidatorsT;
    validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>;
    message: Function<[PartialUnion<ValidatorsT>], MessageT>;
    constructor(validators: ValidatorsT, validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>, message: Function<[PartialUnion<ValidatorsT>], MessageT>);
    validate<Argument extends BaseT>(value: Argument): Construct<BaseT, Argument, ValueT, ValidatableValue<BaseT, ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>>;
}
