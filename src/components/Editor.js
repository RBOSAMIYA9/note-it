import React from 'react'
import {
    Button, Box, Input
} from '@chakra-ui/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Editor() {
    return (
        <Box height="100vh" width="70vw">
            <Box p="2" bg="gray.100" width="70vw" d="flex" justifyContent="space-between">

                <Box >
                    <Input variant="flushed" value="dummy note"/>
                </Box>
                <Box >
                    <Button m={1} size="sm" colorScheme="green">Share</Button>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Box>


            <Box>
                <ReactQuill
                    style={{ height: "80vh" }}
                // height="100vh"
                />
            </Box>
        </Box>
    )
}

export default Editor
