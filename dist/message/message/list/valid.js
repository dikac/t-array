import FilterValid from "../../../validatable/list/valid";
import Map from "./map";
export default function Invalid(list) {
    return Map(FilterValid(list));
}
//# sourceMappingURL=valid.js.map