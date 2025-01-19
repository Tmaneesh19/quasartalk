import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { Box, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <Box key={m._id} display="flex" alignItems="flex-start" mb={4}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="3px"
                  mr={2}
                  size={isMobile ? "md" : "sm"}
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                  boxShadow="md"
                />
              </Tooltip>
            )}
            <Box
              backgroundColor={
                m.sender._id === user._id ? "blue.100" : "green.100"
              }
              borderRadius="xl"
              padding="8px 16px"
              maxWidth="75%"
              marginLeft={isSameSenderMargin(messages, m, i, user._id)}
              marginTop={isSameUser(messages, m, i, user._id) ? 3 : 6}
              boxShadow="sm"
              _hover={{
                backgroundColor: m.sender._id === user._id ? "blue.200" : "green.200",
              }}
              transition="background-color 0.3s ease"
            >
              <Text color={m.sender._id === user._id ? "blue.800" : "green.800"}>
                {m.content}
              </Text>
            </Box>
          </Box>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
