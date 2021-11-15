import React from 'react';
import profileImage from "../../assets/profile/shilu_zou.jpg"

const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

function Nav () {
    return (
       <header>
           <h2>
               <a href="/">
               <img src={profileImage} className="mx-2" style={{ width: "5%" }} alt="profile" /> Shilu Zou  </a>
           </h2>
           <nav>
               <ul className="flex-row">
                   <li className="mx-2">
                       <a href="about">
                           About me
                       </a>
        
                   </li>
                   
                   <li>
                   <span>Contact</span>
                   </li>
                   
                   {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
    <span onClick={() => categorySelected(category.name)} >
      {category.name}
    </span>
  </li>
))}
               </ul>
           </nav>

       </header>

    );
    
}

export default Nav;
