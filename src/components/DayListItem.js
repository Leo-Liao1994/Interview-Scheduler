import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  const formatSpots = (spots) => {
    let returnStatement = 'no spots remaining';
    if (spots === 1) {
      returnStatement = `1 spot remaining `
    } 
    if (spots > 1) {
      returnStatement = `${spots} spots remaining `
    } 

    return returnStatement;
  };


  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

