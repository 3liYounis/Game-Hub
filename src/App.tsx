import { useState } from 'react'
import { Button, HStack } from "@chakra-ui/react"
import './App.css'
import { BiBluetooth } from 'react-icons/bi'
function App() {
  const [count, setCount] = useState(0)
  return (
    <HStack>
      <Button colorScheme={BiBluetooth}>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export default App
