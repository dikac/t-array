import NotEmpty from "./empty";
import NotEmptyMessage from "../validatable/string/not-empty";

export default function NotEmptyStandard() : NotEmpty<string> {

    return new NotEmpty<string>(NotEmptyMessage)
}
