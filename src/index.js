import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBsaPuM_GmWrj5lAo57F0SWX-Tn22Kqe0Q';

// Create new component to produce HTML (still need to create instance of this to pass to DOM)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
}

// Add an instance of component's generated HTML to a specific place in the DOM (cannot just add App)
ReactDOM.render(<App />, document.querySelector('.container'));
