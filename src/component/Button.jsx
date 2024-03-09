import React from 'react';

const Button = ({name}) => {
      //console.log(props);
      return (
            <div>
                  <h1>this is button {name}</h1>
                  <button>Click here</button>
            </div>
      );
};

export default Button;