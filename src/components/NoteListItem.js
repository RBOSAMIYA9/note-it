import {
    Box, Button, Text,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialog, AlertDialogHeader,
    AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import { AiFillDelete } from 'react-icons/ai'
function NoteListItem() {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()
    return (
        <>
            <Box p="6" shadow="md" mt={1} textAlign="left"
                _hover={{ bg: "green.300", color: "white" }}
                _focus={{ boxShadow: "outline" }}>
                <Box textAlign="right">
                    <Button variant="link" color="gray.300" onClick={() => setIsOpen(true)}><AiFillDelete /></Button>
                </Box>
                <Text fontSize="lg">Note heading</Text>
                <Text fontSize="sm" as="p">Note heading</Text>
                <Text fontSize="xs" mt={4} mb={0} p={0} color="gray.400" ><i>10 mins ago</i></Text>
            </Box>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Note
            </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this  afterwards.
            </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
              </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                                Delete
              </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog><AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Customer
            </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
              </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                                Delete
              </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default NoteListItem
