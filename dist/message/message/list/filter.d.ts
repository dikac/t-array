import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
export default function Filter<MessagesType extends Message[]>(list: MessagesType, filter: (messages: List.UnionOf<MessagesType>) => boolean): MapUnion<ListInfer<MessagesType>>;
