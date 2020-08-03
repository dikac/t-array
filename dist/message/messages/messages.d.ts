import Message from "@dikac/t-message/message";
export default interface Messages<MessagesT extends Message[] = Message[]> {
    messages: MessagesT;
}
