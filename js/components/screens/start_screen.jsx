import React from 'react';

class StartScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="press-start" id="start-screen">
        Press START or ENTER<br/>
        to begin!
      </div>
    );
  }
}

export default StartScreen;
