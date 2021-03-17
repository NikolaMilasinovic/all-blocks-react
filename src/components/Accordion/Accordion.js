import React from 'react'
import './accordion.css'
import AccordionItem from "./AccordionItem";

const Accordion = ({ data, theme }) => {

  const hadnleAccortionItemRender = (panel) => <AccordionItem key={panel.id} panel={panel}/>

  return (
    <div className={`accordion accordion--theme--${theme}`}>
      {
        data.map(panel => hadnleAccortionItemRender(panel))
      }
    </div>
  )
}

export default Accordion
