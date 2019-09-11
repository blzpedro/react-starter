import React from "react";
import { Flex, Card, Image, Text } from "rebass";

export const Comic = props => {
  if (Object.keys(props).length > 0) {
    // return (
      // <Flex m={2}>
        {/* <Card mx="auto"> */}
          // <Image src={props.img} alt={props.alt} title={props.alt} />
          return <Text>{props.title} ({`${props.day}.${props.month}.${props.year}`})</Text>
        {/* </Card> */}
      {/* </Flex> */}
    // );
  } else {
    return <Text>Carregando...</Text>;
  }
};
