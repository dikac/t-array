import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import EnsureMessage from "@dikac/t-message/ensure/message";
import ValueMessage from "@dikac/t-message/message/value";
import Fn from "@dikac/t-function/function";
import {List} from "ts-toolbelt";
import MapUnion from "../../../map-union";

export default function Filter<
    MessagesT extends Message[]
>(
    list : MessagesT,
    filter : Fn<[List.UnionOf<MessagesT>], boolean>
) : MapUnion<ListInfer<MessagesT>> {

    return <ListInfer<MessagesT>> list.map((v)=>EnsureMessage(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
