import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
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
) : MapUnion<RecordInfer<MessagesT>> {

    return <RecordInfer<MessagesT>> list.map((v)=>EnsureMessage(v)).
        filter((v)=>filter(v)).
        map(ValueMessage);

}
