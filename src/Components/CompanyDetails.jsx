import React from "react";
import {details} from '../Data/CompanyDetails'
import DetailsCard from "./DetailsCard";

function CompanyDetails() {
  return (
    <div id="spalatorie">
      {details.map((item, index) => {
        return (
          <DetailsCard key={index} image={item.image} title={item.title} paragraph={item.paragraph} id={item.id}/>
        )
      })}
    </div>
  )
}

export default CompanyDetails;
