import { useContext } from "react"
import ContextApi from "./ContextApi"

const useCustomsContext = () => {

    return useContext(ContextApi)
}

export default useCustomsContext;