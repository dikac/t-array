import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import MapUnion from "../../../map-union";
import Messages from "../../../message/messages/messages";
export default function Messages<MessagesT extends Message[]>(list: Messages<MessagesT>): MapUnion<ListInfer<MessagesT>>;
