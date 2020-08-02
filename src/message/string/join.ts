import Message from "@dikac/t-message/message";
import JoinObject from "../join";

export default function Join<MessageT extends Message<string>[]>(
    messages : MessageT,
    delimiter : string
) : string {

    return new JoinObject(messages, delimiter).message
}
