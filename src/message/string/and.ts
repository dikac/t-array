import MessageInterface from "@dikac/t-message/message";
import AndObject from "../and";
import {List} from "ts-toolbelt";

export default function And<Message extends List.Partial<MessageInterface<string>[]>>(
    messages : Message,
) : string {

    return AndObject(messages).message
}
