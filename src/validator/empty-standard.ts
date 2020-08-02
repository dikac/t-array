import Empty from "./empty";
import EmptyMessage from "../validatable/string/empty";

export default function EmptyStandard() : Empty<string> {

    return new Empty<string>(EmptyMessage)
}
