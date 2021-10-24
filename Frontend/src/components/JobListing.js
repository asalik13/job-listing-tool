import React from 'react';

import { parseDate } from '../lib/ParseDate';

/*
  Sample Job Listing Object
  {
    "id": 51,
    "title": "Software Engineer I",
    "companyName": "Techgenix",
    "description": "Entry level Software Engineering role on an Agile team",
    "minYearsExperience": 0,
    "salary": 67848,
    "tags": [
      "Kotlin", 
      "React",
      "MySQL",
      "Git"
    ],
    "createdAt": "2021-10-08T02:23:26.911Z",
    "updatedAt": "2021-10-08T02:23:26.911Z"
  }
*/
const JobListing = ({ listingObj }) => {

  const [ hover, setHover ] = React.useState(false);

  const date = parseDate(listingObj.createdAt);

  return (
      <li 
        className={hover ? 'job-listing-hover' : 'job-listing'} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='listing-header'>
          <div className='title-sal'>
            <h2 id='title'>{listingObj.title}</h2>
            <div id='subtitle'>
              <p id='salary'>
                {`$${listingObj.salary.toLocaleString()}`}
              </p>
              <p id='st-break'>•</p>
              <p id='exp-level'>
                {
                  listingObj.minYearsExperience === 0 ? 
                    'Entry Level' : 
                    `${listingObj.minYearsExperience} Years Experience`
                }
              </p>
            </div>
          </div>
          <div className='manager-dep'>
            <p id='manager-name'>
            {listingObj.manager.firstName + ' ' + listingObj.manager.lastName}
            </p>
            <p id='department'>
              {listingObj.manager.positionTitle}
            </p>
          </div>
        </div>
        <p className='listing-desc'>{listingObj.description}</p>
        <div className='listing-footer'>
            <ul className='tags'>
              {listingObj.tags.map(tag => <li>{tag}</li>)}
            </ul>
            <p id='date'>
              {
                `${date.month}.${date.day}.${date.year} 
                at ${date.hour}:${date.minute} ${date.pm?'PM':'AM'}`
              }
            </p>
        </div>
      </li>
  );
};

export default JobListing;
