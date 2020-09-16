
import React from 'react';
// functional stateless component
var Refresh = (props) => (

  <div>
    {/* {console.log('refresh props:', props)} */}
    <button onClick={props.handleRefresh}>
      Refresh & Show all movies
    </button>
  </div>


)

export default Refresh;

