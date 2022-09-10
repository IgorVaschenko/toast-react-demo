import { hydrate } from "react-dom"

export const renderToast = (element, container) => hydrate(element, container)
