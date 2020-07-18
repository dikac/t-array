import MessageInterface from "@dikac/t-message/message";
import JoinObject from "../join";

export default function Join<Message extends MessageInterface<string>[]>(
    messages : Message,
    delimiter : string
) : string {

    return JoinObject(messages, delimiter).message
}
