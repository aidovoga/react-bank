import React from 'react';

import ListContainer from '../ListContainer/index';

// Single list item
const SingleListItem = (props) => {

   // Default type: comment
   const listType = props.type ? props.type : 'comment';

   return (
      <li className={`list-type-${listType}`}>
         <ListContainer href={props.href}>
            <span className="list-title" dangerouslySetInnerHTML={{__html: props.title}} />
            <span className="list-subtitle">{props.subtitle}</span>
         </ListContainer>
      </li>
   );
}

export default SingleListItem;