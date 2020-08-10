import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import { Interface as ValueCallbackInterface } from "./value-callback";
export default function Value<BaseT = unknown, ValueT extends BaseT = BaseT, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], ReturnT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: Function<[ListReturn<ValidatorsT>], ReturnT>, message: Function<[ListReturn<ValidatorsT>], MessageT>): ValueCallbackInterface<BaseT, ValueT, MessageT, ValidatorsT, ListReturn<ValidatorsT>, ReturnT>;
