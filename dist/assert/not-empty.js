import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/not-empty";
export default function NotEmpty(value, error = EmptyError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-empty.js.map