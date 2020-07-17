import MessageInterface from "@dikac/t-message/message";
import Join from "./join";

export default function And<Message extends MessageInterface<string>[]>(
    messages : Message,
) : Message & MessageInterface <string>{

    return Join(messages, ' or ')
}
