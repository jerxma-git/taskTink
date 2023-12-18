import React, { Component } from 'react';

import "./App.css"

import Stories from 'react-insta-stories';

import { stories } from './stories/stories';

const App = () => {
	return (
    <div className="wrapper">
      <Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
      loop={true}
      />
    </div>
	);
};

export default App;
