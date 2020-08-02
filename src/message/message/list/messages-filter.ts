import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import Fn from "@dikac/t-function/function";
import {List} from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
import Filter from "./filter";


export default function MessagesFilter<
    MessagesT extends Message[]
>(
    list : Messages<MessagesT>,
    filter : Fn<[List.UnionOf<MessagesT>], boolean> = ()=>true
) : MapUnion<RecordInfer<MessagesT>> {

    return Filter(list.messages, filter);
}
