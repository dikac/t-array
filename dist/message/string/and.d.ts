import Message from "@dikac/t-message/message";
export default function And<MessageT extends Message<string>[]>(messages: MessageT): string;
