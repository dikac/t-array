import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import MapUnion from "../../../map-union";
import Validatable from "@dikac/t-validatable/validatable";
export default function Invalid<Messages extends (Message & Validatable)[]>(list: Messages): MapUnion<ListInfer<Messages>>;
