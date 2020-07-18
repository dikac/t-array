import MessageInterface from "@dikac/t-message/message";
export default function Or<Message extends MessageInterface<string>[]>(messages: Message): Message & MessageInterface<string>;
