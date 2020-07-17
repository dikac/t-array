import PropertyValueValidationMessage from "../../boolean/string/value-validation";

export default function ValueValidation(index : number, type : string, validation : string) : Error {

    return new Error(
        PropertyValueValidationMessage(false, index, type, validation)
    );
}
