import React, { useState } from "react";
import styled from "styled-components";

import activeChartIcon from "../../assets/images/active-crypto-chart.svg";
import chartIcon from "../../assets/images/crypto-chart.svg";

const Accordion = ({ title, cName, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionState = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <AccordionWrapper
        className="accordion-wrapper"
        isAccordionOpen={isAccordionOpen}
        setIsAccordionOpen={setIsAccordionOpen}
      >
        <div
          className={`${cName} accordion-title ${
            isAccordionOpen ? "open" : ""
          }`}
          onClick={handleAccordionState}
        >
          {title} <i className="uil uil-angle-down caret-icon"></i>
        </div>
        <div
          className={`accordion-item ${!isAccordionOpen ? "collapsed" : ""}`}
        >
          <div className="accordion-content">{children}</div>
        </div>
      </AccordionWrapper>
    </>
  );
};

export default Accordion;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: solid 1px #f5f6f8;
  padding-top: 8px;
  /* border-bottom: solid 1px #E6E8EC; */

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
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    color: #777e90;
    padding: 4px 0;
    position: relative;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);

    ::before {
      content: "";
      height: 20px;
      width: 20px;
      margin-right: 8px;
      position: relative;
      background-image: url(${chartIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .caret-icon {
      position: absolute;
      right: 0;
      font-size: 20px;
    }

    &:hover,
    &.open {
      color: #030303 !important;

      ::before {
        background-image: url(${activeChartIcon});
      }
    }
    &.open {
      .caret-icon {
        position: absolute;
        right: 0;
        transform: rotate(-180deg);
        transition: 0.35s cubic-bezier(0, 1, 0, 1);
      }
    }
  }

  .accordion-content {
    max-height: 480px;
    overflow-y: auto;
  }
`;
