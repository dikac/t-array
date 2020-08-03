import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import Fn from "@dikac/t-function/function";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
export default function MessagesFilter<MessagesT extends Message[]>(list: Messages<MessagesT>, filter?: Fn<[List.UnionOf<MessagesT>], boolean>): MapUnion<ListInfer<MessagesT>>;
