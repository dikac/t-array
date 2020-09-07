import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import {List} from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
import Filter from "./filter";

export default function MessagesFilter<
    MessagesType extends Message[]
>(
    list : Messages<MessagesType>,
    filter : (messages:List.UnionOf<MessagesType>)=>boolean = ()=>true
) : MapUnion<ListInfer<MessagesType>> {

    return Filter(list.messages, filter);
}
