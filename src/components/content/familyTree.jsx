import React, { useState } from "react";
import treeData from "../../utils/familyTree";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const FamilyTree = () => {
  // if (window.innerWidth <= 330) {
  //   return <h1>Not displaying component content.</h1>;
  // }

  const displayIfChildren = (node, element) => {
    if (node.children.length) {
      return element;
    }
    return "";
  };

  const displayPartner = (node) => {
    if (node.partner) {
      if (node.partner.display) {
        return (
          <React.Fragment>
            <b>&#38;</b>
            {displayWithHoverData(
              <button>{node.partner.name}</button>,
              node.partner
            )}
          </React.Fragment>
        );
      }
      return "";
    }
    return "";
  };

  const getPersonDeadCase = (person, forPartner = false) => {
    if (!person.alive) {
      if (!forPartner) return "died at " + getAge(person.born, person.died);
      return ", who died at " + getAge(person.born, person.died);
    }

    return "";
  };

  const getAge = (dte, died = null) => {
    if (died) return died.getFullYear() - dte.getFullYear();
    return new Date().getFullYear() - dte.getFullYear();
  };

  const displayWithHoverData = (button, data = null) => {
    const getPartner = () => {
      if (data.partner) {
        let spouse = "Former Partner: ";
        if (data.partner.married) {
          spouse = data.partner.gender === "female" ? "Wife: " : "Husband: ";
        }

        return (
          <React.Fragment>
            <b>{spouse} </b>
            {data.partner.name}
            {data.partner.alive && <i> {getAge(data.partner.born)}</i>}
            {getPersonDeadCase(data.partner, true)}
          </React.Fragment>
        );
      }
    };

    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        key={"top"}
        placement={"top"}
        overlay={
          <Popover id={`popover-positioned-${"top"}`}>
            <Popover.Header as="h3">
              {!data.alive ? (
                <img src="https://img.icons8.com/windows/32/000000/cemetery.png" />
              ) : (
                ""
              )}
              {data.fullName}{" "}
              {data.gender === "male" ? (
                <i className="fas fa-mars"></i>
              ) : (
                <i className="fas fa-venus"></i>
              )}
            </Popover.Header>
            <Popover.Body>
              <span>
                <b>Age: </b>
                {data.alive
                  ? getAge(data.born)
                  : getPersonDeadCase(data, false)}
              </span>
              <span>
                {data.died && (
                  <React.Fragment>
                    <b>Deathday: </b>
                    {data.died.toLocaleString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </React.Fragment>
                )}
              </span>
              <span>
                <b>Birthday: </b>{" "}
                {data.born.toLocaleString("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{getPartner(data)}</span>
              {data.children ? (
                <React.Fragment>
                  {data.children.length ? (
                    <span>
                      <b>Children: </b>
                      {data.children.length}
                    </span>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ) : (
                ""
              )}
            </Popover.Body>
          </Popover>
        }
      >
        {button}
      </OverlayTrigger>
    );
  };

  const displayTree = (node) =>
    node.children && (
      <li key={node.name}>
        <span>
          {displayWithHoverData(<button>{node.name}</button>, node)}

          {displayPartner(node)}
        </span>
        {displayIfChildren(
          node,
          <ul>{node.children.map((child) => displayTree(child))}</ul>
        )}
      </li>
    );

  return (
    <div className="tree">
      <ul>{treeData.map((node) => displayTree(node))}</ul>
    </div>
  );

  // return (
  //   <div class="tree">
  //     <ul>
  //       <li>
  //         <span> Parent </span>
  //         <ul>
  //           <li>
  //             <span> Child </span>
  //             <ul>
  //               <li>
  //                 <span> Grand Child </span>
  //                 <ul>
  //                   <li>
  //                     <span> Great Grand Child </span>
  //                   </li>
  //                   <li>
  //                     <span> Great Grand Child </span>
  //                     <ul>
  //                       <li>
  //                         <span> Great Great Grand Child </span>
  //                       </li>
  //                     </ul>
  //                   </li>
  //                   <li>
  //                     <span> Great Grand Child </span>
  //                   </li>
  //                 </ul>
  //               </li>
  //             </ul>
  //           </li>
  //           <li>
  //             <span> Child </span>
  //             <ul>
  //               <li>
  //                 <span> Grand Child </span>
  //               </li>
  //               <li>
  //                 <span> Grand Child </span>
  //               </li>
  //               <li>
  //                 <span> Grand Child </span>
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //       </li>
  //     </ul>
  //   </div>
  // );
};

export default FamilyTree;
