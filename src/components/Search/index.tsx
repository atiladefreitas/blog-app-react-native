import { Container, TextInput, Icon } from "./style";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

function Search(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <TextInput />
    </Container>
  );
}

export { Search };
