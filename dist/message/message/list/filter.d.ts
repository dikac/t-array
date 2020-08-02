import Message from "@dikac/t-message/message";
import RecordInfer from "./infer";
import Fn from "@dikac/t-function/function";
import { List } from "ts-toolbelt";
import MapUnion from "../../../map-union";
export default function Filter<MessagesT extends Message[]>(list: MessagesT, filter: Fn<[List.UnionOf<MessagesT>], boolean>): MapUnion<RecordInfer<MessagesT>>;
