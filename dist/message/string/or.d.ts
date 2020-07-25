import MessageInterface from "@dikac/t-message/message";
import { List } from "ts-toolbelt";
export default function Or<Message extends List.Partial<MessageInterface<string>[]>>(messages: Message): string;
