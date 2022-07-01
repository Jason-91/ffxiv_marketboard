import { TextField } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ServerSwitchButton from './common/ServerSwitchButton';
import CrossWorldView from './server-view/CrossWorldView';
import IndividualWorldView from './server-view/IndividualWorldView';

function App() {
//add last sold timers to buttons
  const buttonConfig = [
    {
      buttonName: 'Cross-World',
      viewType: 'cross-world-view'
    },
    {
      buttonName: 'Balmung',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Brynhildr',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Coeurl',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Diabolos',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Goblin',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Mateus',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Malboro',
      viewType: 'individual-world-view'
    },
    {
      buttonName: 'Zalera',
      viewType: 'individual-world-view'
    },
  ];
  
  //react hook
  //current state, method to update state
  const [currentView, setCurrentView] = useState('cross-world-view');
  const [searchInput, setSearchInput] = useState('');

  const switchView = (viewType: string) => {
    setCurrentView(viewType);
  }

  //bad practice; update later, newb
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput)
  }
  
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      console.log('call API')
      console.log(searchInput)
    }
  }

  // const switchView = () => {
  //   setCurrentView('cross-world-view');
  // }

  // const switchViewOther = () => {
  //   setCurrentView('other');
  // }

  
  return (
    <div>
      {/* add home button via svg icon */}
      <div><HomeIcon /></div>
      <div className='search-bar-container'>
        <TextField id="filled-basic" label="Search" variant="filled" value={searchInput} onChange={handleSearch} onKeyDown={handleKeyDown}/>
        {/* user can search item with item name
        once user presses enter, items with that string in the name will be on drop down list
        user can click specific item from drop down list to pull up page
        if item does not exist, found 0/0 results
        show top 50 results by ilvl or by item id number
        Obtain top 50 results, on click, send item id number back to API to return results
         */}
      
      </div>

      <div>
        <h1>SPACE FOR IMAGE AND ITEM NAME AND ITEM TYPE</h1>
      </div>


      

      <div className='crystal-servers'>
        {/* <Button onClick={switchView} variant="outlined">
          Cross-World
        </Button>
        <Button onClick={switchView} variant="outlined">
          Balmung
        </Button>
        <Button onClick={switchView} variant="outlined">
          Brynhildr
        </Button>
        <Button onClick={switchView} variant="outlined">
          Coeurl
        </Button>
        <Button onClick={switchView} variant="outlined">
          Diabolos
        </Button>
        <Button onClick={switchView} variant="outlined">
          Goblin
        </Button>
        <Button onClick={switchView} variant="outlined">
          Malboro
        </Button>
        <Button onClick={switchView} variant="outlined">
          Mateus
        </Button>
        <Button onClick={switchView} variant="outlined">
          Zalera
        </Button> */}
        {
          buttonConfig.map((ele, index) => {
            const { buttonName, viewType } = ele;
            return (
              <ServerSwitchButton
                key={index}
                buttonName={buttonName}
                viewType={viewType}
                switchMethod={switchView}
              ></ServerSwitchButton>
            )
          })
        }
      </div>

      <div className='all-servers-content-container'>
        {currentView === 'cross-world-view'
          ? <CrossWorldView />
          : <IndividualWorldView />
        }
      </div>

    </div>
  );
}

export default App;