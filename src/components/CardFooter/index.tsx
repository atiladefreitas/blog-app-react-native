import { Container, Text, IconContainer } from "./style";
import { FaTrash } from "react-icons/fa";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function CardFooter(): JSX.Element {
  return (
    <Container>
      <IconContainer>
        <FontAwesome name="trash" size={24} color="#B20D30" />
      </IconContainer>
      <IconContainer>
        <MaterialIcons name="mode-edit" size={24} color="#3F784C" />
      </IconContainer>
    </Container>
  );
}

export { CardFooter };
