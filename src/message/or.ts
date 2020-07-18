import MessageInterface from "@dikac/t-message/message";
import Join from "./join";

export default function Or<Message extends MessageInterface<string>[]>(
    messages : Message,
) : Message & MessageInterface <string>{

    return Join(messages, ' or ')
}
