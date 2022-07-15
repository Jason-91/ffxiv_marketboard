import ServerSwitchButton from './common/ServerSwitchButton';
import CrossWorldView from './server-view/CrossWorldView';
import IndividualWorldView from './server-view/IndividualWorldView';
import axios from 'axios';
import SearchBar from './components/SearchBar';
// import BookData from './Data.json'
import { useState } from 'react';

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
  // const [searchInput, setSearchInput] = useState('');

  const getItems = async (item_name: string) => {
    let result: any[] = [];

    await axios.get(`http://localhost:8000/search-itemname?item_name=${item_name.toLowerCase()}`)
      .then((res: any) => {
        result = res.data.data;
      })
      .catch((err: string) => {
        console.log('ERR: ' + err);
      });

    return result;
  }

  const switchView = (viewType: string) => {
    setCurrentView(viewType);
  }

  // //bad practice; update later, newb
  // const handleSearch = (e: any) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // }

  // const handleKeyDown = (e: any) => {
  //   if (e.key === 'Enter' && searchInput.length > 0) {
  //     getItems(searchInput);
  //   }
  // }

  return (
    <div>
      <div>
        <SearchBar placeholder='Enter Item Name...' getItems={getItems} />
      </div>
      {/* <div className='search-bar-container'>
        <TextField id="filled-basic" label="Search" variant="filled" value={searchInput} onChange={handleSearch} onKeyDown={handleKeyDown}/>  
      </div> */}

      <div>
        <h1>SPACE FOR IMAGE AND ITEM NAME AND ITEM TYPE</h1>
      </div>

      <div className='crystal-servers'>
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