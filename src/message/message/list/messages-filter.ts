import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import {List} from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
import Filter from "./filter";

export default function MessagesFilter<
    MessagesT extends Message[]
>(
    list : Messages<MessagesT>,
    filter : (messages:List.UnionOf<MessagesT>)=>boolean = ()=>true
) : MapUnion<ListInfer<MessagesT>> {

    return Filter(list.messages, filter);
}
