import React, {useState} from "react";
import styled from "styled-components";

const Accordion = ({title, cName, children}) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleAccordionState = () => {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <>
            <AccordionWrapper className="accordion-wrapper">
                <div
                    className={`${cName} accordion-title ${isAccordionOpen ? "open" : ""}`}
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                    {title} <i className="uil uil-angle-down caret-icon"></i>
                </div>
                <div className={`accordion-item ${!isAccordionOpen ? "collapsed" : ""}`}>
                    <div className="accordion-content">
                        {children}
                    </div>
                </div>
            </AccordionWrapper>
        </>
    )
}

export default Accordion;

export const AccordionWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-top: solid 1px #f5f6f8;
   padding-top: 8px;
  
  .accordion-item {
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
      height: auto;
      max-height: 9999px;
  }
  
  .accordion-item.collapsed {
      max-height: 0;
      transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }
  
  .accordion-title {
    //   border: solid 1px #f6f7f9;
      font-weight: 600;
      cursor: pointer;
      font-size: 16px;
      color: #313650;
      background-color: #FFFFFF;
      padding: 16px 20px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
      
      &:hover,
      &.open {
        color: #2A65F6 !important;
        background-color: #ECF2FF;
      }
      &.open {
        .caret-icon {
            transform: rotate(-180deg);
            transition: 0.35s cubic-bezier(0, 1, 0, 1);
        }
      }
  }
  
  .accordion-content {
      max-height: 480px;
      overflow-y: auto;
  }   

`