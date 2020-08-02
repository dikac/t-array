import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMap from "./return/list/standard";
import ListReturn from "./return/list/infer";
import ValidatableMap from "../validatable/map-callback";
import BaseList from "./parameter/base/list/infer";
import TypeList from "./parameter/type/list/infer";
import Construct from "@dikac/t-validator/return/return";

export interface MapAllInterface<
    Validators extends Validator[],
    ValidatableT extends Validatable,
    Message = unknown,
> extends Validator<
    BaseList<Validators>,
    TypeList<Validators>,
    ValidatableMap<Validators, ListReturn<Validators>, Message, ValidatableT>
> {
    validators : Validators,
    validation : Function<[ListReturn<Validators>], ValidatableT>,
    message : Function<[ListReturn<Validators>], Message>
}

export default function  MapAll<
    Validators extends Validator[] = Validator[],
    ValidatableT extends Validatable = Validatable,
    Message = unknown,
>(
    validators : Validators,
    validation : Function<[ListReturn<Validators>], ValidatableT>,
    message : Function<[ListReturn<Validators>], Message>
) : MapAllInterface<Validators, ValidatableT, Message> {

    return new MapAllClass(validators, validation, message);
}


export class MapAllClass<
    Validators extends Validator[] = Validator[],
    ValidatableT extends Validatable = Validatable,
    Message = unknown,
> implements MapAllInterface<Validators, ValidatableT, Message> {

    constructor(
        public validators : Validators,
        public validation : Function<[ListReturn<Validators>], ValidatableT>,
        public message : Function<[ListReturn<Validators>], Message>
    ) {
    }

    validate<
        Argument extends BaseList<Validators>
    >(value: Argument) : Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMap<Validators, ListReturn<Validators>, Message, ValidatableT>> {

        let validator = new ValidatableMap(
            value,
            this.validators, (value, validators) => ValidateMap(value, validators, false),
            this.validation,
            this.message
        );

        return <Construct<BaseList<Validators>, Argument, TypeList<Validators>, ValidatableMap<Validators, ListReturn<Validators>, Message, ValidatableT>>> validator;
    }
}
