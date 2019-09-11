import React from "react";
import { Flex, Text, Box, Link} from "rebass";

export const Nav = (props) => {
    const flexProps = {
        px: 2,
        color: 'white',
        bg: 'black',
        alignItems: 'center'
    };

    return (
        <Flex {...flexProps}>
            <Text p={2} fontWeight='bold'>{props.title}</Text>
            <Box mx='auto' />
            <Link variant='nav' href='/'>Home</Link>{'|'}
            <Link variant='nav' href='/shallow'>Shallow Link</Link>{'|'}
            <Link variant='nav' href='/deep/1'>Deep Link</Link>
        </Flex>
    );
};