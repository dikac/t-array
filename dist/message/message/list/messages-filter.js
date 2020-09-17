import Filter from "./filter";
export default function MessagesFilter(list, filter = () => true) {
    return Filter(list.messages, filter);
}
//# sourceMappingURL=messages-filter.js.map