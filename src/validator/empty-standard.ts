import Empty from "./empty";
import EmptyMessage from "../validatable/string/empty";

/**
 * create {@see Empty} with default message
 */
export default function EmptyStandard() : Empty<string> {

    return new Empty<string>(EmptyMessage)
}
