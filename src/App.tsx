import logo from "./logo.svg"
import "./App.scss"
import { FC } from "react"

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello World to this Site
      </header>
    </div>
  )
}

export default App
