import React, { useState, useEffect } from 'react'
import {
  Button, Box, Text, Input, Fade, FormControl, useColorMode
} from '@chakra-ui/react'
import NoteListItem from './NoteListItem'
import { addNote } from '../firebase/crud'
import { projectFirestore } from '../firebase/firebaseConfig'

var collectionRef = projectFirestore.collection('notes');




function Sidebar({ setterFunc }) {

  // eslint-disable-next-line 
  const { colorMode, toggleColorMode } = useColorMode();

  const [showAddnote, setshowAddnote] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [listOfNotes, setListOfNotes] = useState([]);
  const [notesCount, setNotesCount] = useState(0);

  const errormessage = "please enter some title!"



  const getAllNotes = () => {
    collectionRef.onSnapshot((snapshot) => {
      setNotesCount(snapshot.docs.length)
      console.log(snapshot);
      setListOfNotes(snapshot.docs.map((doc) => ({ "id": doc.id, data: doc.data() })))
    })
  }


  useEffect(() => {

    getAllNotes();
  }, [])
  const handleNewNote = () => {
    setshowAddnote(true);
  }
  const handleCancle = () => {
    setshowAddnote(false);
  }
  const handleSubmit = () => {

    if (formInput) {
      console.log("inside submit");

      setshowAddnote(false);
      addNote(formInput)
    }
    else {
      setTimeout(() => {
        setShowError(false);
      }, 3000)
      setShowError(true);
    }
  }

  return (
    <>
      <Box m="0">
        <Box width="30vw" height="100vh"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "lightgray",
              borderRadius: '24px',
            },
          }}
        >

          <Box minHeight="20" shadow="md" bg={colorMode === "light" ? "gray.300" : "gray.600"} position="fixed" width="30vw">

            <Box d="flex" pt="6" pl="6" pr="6" pb="0" justifyContent="space-between">
              <Text fontWeight="light">Notes</Text>
              <Button colorScheme="green" size="xs" onClick={handleNewNote}>New Note</Button>
            </Box >
            <Box textAlign="left" pl="6" pb="2">
              <Text as="span" fontSize="sm" fontWeight="light">{notesCount} notes</Text>
            </Box>
            {showAddnote && <Box p="6">

              <Fade in={handleNewNote}>
                <FormControl isRequired>
                  <Input border="1px" borderColor="blackAlpha.200" value={formInput} onChange={(e) => setFormInput(e.target.value)} placeholder="Enter note Title" />
                  {showError && <Text as="span" mt={2} fontSize="sm" style={{ color: "red" }} >{errormessage}</Text>}
                  <Box d="flex" justifyContent="space-between" mt={3}>
                    <Button colorScheme="green" onClick={handleSubmit}> Submit </Button>
                    <Button colorScheme="red" type="submit" onClick={handleCancle} > Cancel </Button>

                  </Box>
                </FormControl>
              </Fade>
            </Box>}

          </Box>



          <Box mt={24}>
            {console.log("listOfNotes", listOfNotes)}

            {listOfNotes &&
              listOfNotes.map((note) => (
                <NoteListItem data={note} setNote={setterFunc} />
              ))}


          </Box>


        </Box>
      </Box>
    </>
  )
}

export default Sidebar
