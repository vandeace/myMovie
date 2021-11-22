import { Flex } from '@chakra-ui/layout';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg='#313538'
      color='white'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
