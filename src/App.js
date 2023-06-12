import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {drama,thriller,action,originals } from './urls'
import './app.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
        <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Original'/>
       <RowPost url={action} title='Action' isSmall />
       <RowPost url={thriller} title='thriller' isSmall />
       <RowPost url={drama} title='drama' isSmall />
    </div>
  );
}

export default App;
