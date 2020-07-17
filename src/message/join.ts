import MessageInterface from "@dikac/t-message/message";
import {List} from "ts-toolbelt";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";

export default function Join<Message extends MessageInterface<string>[]>(
    messages : Message,
    delimiter : string
) : Message & MessageInterface <string> & {delimiter:string} {

    let values =  new class extends Array<List.UnionOf<Message>> {

        readonly delimiter : string = delimiter;

        constructor() {

            super(...messages);
        }

        get message() : string {

            return this.map(message=>message.message).join(this.delimiter);
        }
    }

    return <any> values;
}
