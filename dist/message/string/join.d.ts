import Message from "@dikac/t-message/message";
export default function Join<MessageT extends Message<string>[]>(messages: MessageT, delimiter: string): string;
