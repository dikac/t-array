import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
export default function Filter<MessagesT extends Message[]>(list: MessagesT, filter: (messages: List.UnionOf<MessagesT>) => boolean): MapUnion<ListInfer<MessagesT>>;
