import {Button} from "react-native";

export default function Bot({ title, onPress }) {
    return <Button title={title} onPress={(v) => onPress(title)} />
}
