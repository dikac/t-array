import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import PartialUnion from "./return/list/partial-union";
import ValidatableMap from "../validatable/map-callback";
import BaseList from "./parameter/base/list/infer";
import TypeList from "./parameter/type/list/infer";
import ListReturn from "./return/list/infer";
import Construct from "@dikac/t-validator/return/return";
interface MapInterface<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown> extends Validator<BaseList<ValidatorsT>, TypeList<ValidatorsT>, ValidatableMap<ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>> {
    validators: ValidatorsT;
    validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>;
    message: Function<[PartialUnion<ValidatorsT>], MessageT>;
}
export default function Map<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>, message: Function<[PartialUnion<ValidatorsT>], MessageT>): MapInterface<ValidatorsT, ValidatableT, MessageT>;
export declare class MapClass<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown> implements Validator<BaseList<ValidatorsT>, TypeList<ValidatorsT>, ValidatableMap<ValidatorsT, PartialUnion<ValidatorsT>, MessageT, ValidatableT>> {
    validators: ValidatorsT;
    validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>;
    message: Function<[PartialUnion<ValidatorsT>], MessageT>;
    constructor(validators: ValidatorsT, validation: Function<[PartialUnion<ValidatorsT>], ValidatableT>, message: Function<[PartialUnion<ValidatorsT>], MessageT>);
    validate<Argument extends BaseList<ValidatorsT>>(value: Argument): Construct<BaseList<ValidatorsT>, Argument, TypeList<ValidatorsT>, ValidatableMap<ValidatorsT, ListReturn<ValidatorsT>, MessageT, ValidatableT>>;
}
export {};
