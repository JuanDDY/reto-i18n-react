import React, { useEffect, useState } from "react";
import Job from "./job";

import { FormattedMessage} from 'react-intl';

const JobsList = (props) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views:91000
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views:102003
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views:14500
    },
    {
      id: "0004",
      name: "Director",
      company: "Universidad de los andes",
      salary: 77000,
      city: "Bogotá, Colombia",
      date: "2020-05-22",
      views: 500
    },
  ]);
  const [language, ] = useState(navigator.language);
  
  const [colorTabla, setColorTabla] = useState({backgroundColor: "#d3d3d3", color:"white"}) 
  useEffect(() => {
    if(language.startsWith("es")) {
      setColorTabla({backgroundColor: "#d3d3d3", color:"black" })
      console.log("español: tabla light")
    } else {
      setColorTabla({backgroundColor: "black", color:"white"})
      console.log("ingles: tabla dark")
    }
  }, [language])

  return (
    <div>
      <table className="table">
      <thead style={colorTabla} 
             >
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position"/>              
            </th>
            <th scope="col">
              <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
              <FormattedMessage id="City"/>
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
