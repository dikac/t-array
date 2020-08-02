import Message from "@dikac/t-message/message";
export default function Or<MessageT extends Message<string>[]>(messages: MessageT): string;
