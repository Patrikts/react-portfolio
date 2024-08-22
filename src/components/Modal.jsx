import { Fragment } from "react"
import Card from "./Card"

const Modal = ({classname, children}) => {
  return (
    <Fragment>
            <section id="backgrou"> </sectio>
        <Card className={className}>{children}</Card>
    </Fragment>
  )
}

export default Modal