import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          icon={<ViewIcon />}
          onClick={onOpen}
          aria-label="View Profile"
          colorScheme="blue"
          size="sm"
          _hover={{ bg: "blue.600" }}
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          h="450px"
          bg="gray.50"
          borderRadius="xl"
          boxShadow="lg"
          p={4}
        >
          <ModalHeader
            fontSize="3xl"
            fontWeight="bold"
            color="orange.600"
            textAlign="center"
            fontFamily="Poppins"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton
            size="lg"
            _hover={{ bg: "red.100", color: "blue.600" }}
          />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              boxShadow="lg"
              border="4px solid"
              borderColor="black.200"
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
                objectFit="cover"
              />
            </Box>
            <Text
              mt={4}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              color="gray.900"
              fontFamily="Work Sans"
              textAlign="center"
            >
              {user.email}
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              colorScheme="pink"
              size="lg"
              borderRadius="full"
              px={8}
              onClick={onClose}
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
