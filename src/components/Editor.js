import React, { useState } from 'react'
import {
    // eslint-disable-next-line
    Button, Box, Input, Editable, EditablePreview, EditableInput, useEditableControls, ButtonGroup,
    // eslint-disable-next-line
    IconButton, CheckIcon, CloseIcon, Flex, EditIcon,Text
} from '@chakra-ui/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { updateByid } from '../firebase/crud'
import debounce from 'lodash.debounce';

function Editor({ data }) {

    // eslint-disable-next-line 
    const [value, setvalue] = useState(data.data.title)

    // setvalue(data.data.title)
    const dataChanged = (editedData) => {
        console.log("daata:", editedData);
        const debouncedSave = debounce(() => updateByid(data.id, editedData, data.data.title), 3000);
        debouncedSave();
    };



    // function EditableControls() {
    //     const {
    //         isEditing,
    //         getSubmitButtonProps,
    //         getCancelButtonProps,
    //         getEditButtonProps,
    //     } = useEditableControls()

    //     return isEditing ? (
    //         <ButtonGroup justifyContent="center" size="sm">
    //             <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
    //             <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    //         </ButtonGroup>
    //     ) : (
    //         <Flex justifyContent="center">
    //             <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    //         </Flex>
    //     )
    // }





    return (
        <Box height="100vh" width="70vw">
            <Box p="2" bg="gray.100" width="70vw" d="flex" justifyContent="space-between">

                <Box >
                    {/* <Editable
                        textAlign="center"
                        defaultValue="Rasengan ⚡️"
                        fontSize="2xl"
                        isPreviewFocusable={false}
                    >
                        <EditablePreview />
                        <EditableInput />
                        <EditableControls />
                    </Editable> */}
                    {/* <Input variant="flushed" type="text" value={value} onChange={(e) => editableChanged(e)} /> */}
                    <Text>{data.data.title}</Text>
                </Box>
                <Box >
                    <Button m={1} size="sm" colorScheme="green">Share</Button>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Box>


            <Box>
                <ReactQuill
                    style={{ height: "80vh" }}
                    value={data.data.body}
                    onChange={(e) => dataChanged(e)}
                />
            </Box>
        </Box>
    )
}




export default Editor
