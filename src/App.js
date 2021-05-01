import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Box d="flex" width="100vw">
          <Box>
            <Sidebar />
          </Box>
          <Box>
            <Editor flexgrow="1" />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
