import {List} from "ts-toolbelt";
import Message from "@dikac/t-message/message";

export default interface Messages<
    Record extends List.Partial<Message[]> = List.Partial<Message[]>
> {

    messages : Record;
}
