import MessageInterface from "@dikac/t-message/message";
export default function Join<Message extends MessageInterface<string>[]>(messages: Message, delimiter: string): string;
