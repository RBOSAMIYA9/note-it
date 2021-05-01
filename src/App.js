import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'



function App() {
  const [data, setdata] = useState({})

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Box d="flex" width="100vw">
          <Box>
            <Sidebar setterFunc={setdata} />
          </Box>
          <Box>
            {Object.keys(data).length > 0  && <Editor flexgrow="1" data={data} />}

          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
