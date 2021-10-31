import logo from "./logo.svg"
import "./App.scss"
import "i18n/config"
import { FC } from "react"
import { useTranslation } from "react-i18next"

const App: FC = () => {
  const { t } = useTranslation(["pages"])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t("pages:index:greeting")}
      </header>
    </div>
  )
}

export default App
