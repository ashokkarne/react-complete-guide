import React from 'react';

withClass = (WrappedComponent, clasName) => {

  return  props => 
   (  <div className={clasName}>
          <WrappedComponent {...props} />
     </div> 
   )

}

export default withClass;