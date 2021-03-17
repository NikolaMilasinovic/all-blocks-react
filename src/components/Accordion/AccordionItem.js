import React, {useRef, useState} from 'react'
import { useAppContext } from '../../context';


const AccordionItem = ({panel}) => {

    const contentRef = useRef(null);
    const paragraphRef = useRef(null);

    const [showPlusIcon, setShowPlusIcon] = useState(true);

    const { toggleSlideAccordionItem } = useAppContext();

    const handleClick = (e) => {
      toggleSlideAccordionItem(e,contentRef,paragraphRef);
      setShowPlusIcon(!showPlusIcon);
    }

    const {title,text} = panel
    return(
        <div className="accordion__item">
        <div className="accordion__header" onClick={handleClick}>
          <h1 className="accordion__title">{title}</h1>

          <span className={`accordion__icon`}>
            <i className= {`${!showPlusIcon ? "fas fa-plus"  : "fas fa-minus"}`} ></i>
          </span>
        </div>
        <div ref={contentRef} className="accordion__content">
          <p ref={paragraphRef} className="accordion__paragraph">{text}</p>
        </div>
      </div>
    )
}


export default AccordionItem;