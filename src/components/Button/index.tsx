import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./style";

type Props = RectButtonProps & {
  title: string;
};

function Button({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

export { Button };
