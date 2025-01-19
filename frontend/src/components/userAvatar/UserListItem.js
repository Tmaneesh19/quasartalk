import { Avatar } from "@chakra-ui/avatar";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="gray.100"
      _hover={{
        background: "teal.400",
        color: "white",
        transform: "scale(1.02)",
        boxShadow: "md",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={4}
      py={3}
      mb={3}
      borderRadius="lg"
      transition="all 0.2s"
      boxShadow="base"
    >
      <Avatar
        mr={4}
        size="md"
        name={user.name}
        src={user.pic}
        border="2px solid teal"
      />
      <VStack align="start" spacing={0}>
        <Text fontWeight="semibold" fontSize="md">
          {user.name}
        </Text>
        <HStack spacing={1}>
          <Text fontSize="sm" color="gray.600">
            <b>Email:</b>
          </Text>
          <Text fontSize="sm" isTruncated>
            {user.email}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default UserListItem;
