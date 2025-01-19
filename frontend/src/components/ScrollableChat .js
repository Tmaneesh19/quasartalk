const ScrollableChat = ({ messages, onMessageClick }) => {
  return (
    <Box>
      {messages.map((message) => (
        <Text
          key={message._id}
          onClick={() => onMessageClick(message._id)}
          cursor="pointer"
        >
          {message.content}
        </Text>
      ))}
    </Box>
  );
};

export default ScrollableChat;
