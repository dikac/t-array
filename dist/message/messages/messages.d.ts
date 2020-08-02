import Message from "@dikac/t-message/message";
export default interface Messages<Record extends Message[] = Message[]> {
    messages: Record;
}
