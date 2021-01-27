import AssertList from "../assert/list";
/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */
export default function List(list, validation, error) {
    AssertList(list, validation, error);
    return list;
}
//# sourceMappingURL=list.js.map