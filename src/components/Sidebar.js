import React, { useState } from 'react'
import {
  Button, Box, Text, Input, Fade
} from '@chakra-ui/react'
import NoteListItem from './NoteListItem'
import { addNote } from '../firebase/crud'

function Sidebar() {
  const [showAddnote, setshowAddnote] = useState(false)
  const handleNewNote = () => {
    setshowAddnote(true);
  }
  const handleCancle = () => {
    setshowAddnote(false);
  }
  const handleSubmit = () => {
    console.log("inside submit");
    setshowAddnote(false);
    addNote()

  }
  return (
    <>
      <Box m="0">
        <Box width="30vw" height="100vh" overflowY="scroll">

          <Box minHeight="20" shadow="md" bg="gray.300" position="fixed" width="30vw">

            <Box d="flex" pt="6" pl="6" pr="6" pb="0" justifyContent="space-between">
              <Text fontWeight="light">Notes</Text>
              <Button colorScheme="green" size="xs" onClick={handleNewNote}>New Note</Button>
            </Box >
            <Box textAlign="left" pl="6" pb="2">
              <Text as="span" fontSize="sm">6 notes</Text>
            </Box>
            {showAddnote && <Box p="6">
              <Fade in={handleNewNote}>
                <Input border="1px" borderColor="blackAlpha.200" placeholder="Enter note Title" />
                <Box d="flex" justifyContent="space-between" mt={3}>
                  <Button colorScheme="green" onClick={handleSubmit}> Submit </Button>
                  <Button colorScheme="red" onClick={handleCancle} > Cancel </Button>
                </Box>
              </Fade>
            </Box>}

          </Box>



          <Box mt={24}>
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
          </Box>


        </Box>
      </Box>
    </>
  )
}

export default Sidebar
