import React from "react"
import Button from "./Components/Button/Button"
function App() {
    return (<div>
        <Button onClick={() => (alert('Save Button Clicked'))}>Reset Button</Button>
    </div>)
}

export default App