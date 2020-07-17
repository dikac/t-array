import MessageInterface from "@dikac/t-message/message";
export default function And<Message extends MessageInterface<string>[]>(messages: Message): Message & MessageInterface<string>;
