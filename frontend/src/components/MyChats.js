import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      p={4}
      bg="gray.50"
      w={{ base: "100%", md: "30%" }}
      borderRadius="xl"
      boxShadow="lg"
      border="1px solid"
      borderColor="gray.200"
    >
      <Box
        pb={4}
        px={4}
        fontSize={{ base: "24px", md: "28px" }}
        fontFamily="Poppins, sans-serif"
        fontWeight="bold"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        color="teal.600"
        borderBottom="2px solid"
        borderColor="teal.400"
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "14px", md: "16px" }}
            bg="teal.500"
            color="white"
            _hover={{
              bg: "teal.600",
            }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={4}
        bg="white"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
        boxShadow="inner"
      >
        {chats ? (
          <Stack overflowY="scroll" spacing={3}>
            {chats.map((chat) => (
              <Box
                key={chat._id}
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "teal.500" : "gray.100"}
                color={selectedChat === chat ? "white" : "gray.800"}
                px={4}
                py={3}
                borderRadius="lg"
                boxShadow={selectedChat === chat ? "md" : "sm"}
                _hover={{
                  background: "teal.400",
                  color: "white",
                }}
                transition="all 0.2s"
              >
                <Text fontWeight="bold" fontSize="md">
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="sm" color={selectedChat === chat ? "gray.200" : "gray.600"}>
                    <b>{chat.latestMessage.sender.name}:</b>{" "}
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
