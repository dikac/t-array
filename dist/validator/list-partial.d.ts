import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import { Interface as ListCallbackInterface } from "./list-callback";
import Union from "../union";
export default function ListPartial<MessageT = unknown, ValidatorT extends Validator = Validator, ValidatableT extends Validatable = Validatable>(validator: ValidatorT, validation: Function<[Union<InferReturn<ValidatorT>[]>], ValidatableT>, message: Function<[Union<InferReturn<ValidatorT>[]>], MessageT>): ListCallbackInterface<MessageT, ValidatorT, Union<InferReturn<ValidatorT>[]>, ValidatableT>;
