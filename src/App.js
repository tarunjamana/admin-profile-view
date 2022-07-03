import './App.scss';
import CustomIframe from './Components/CustomIframe';
import DataTable from './Components/DataTable/DataTable';
import SideMenu from './Components/SideMenu/SideMenu';
import TestComponent from './Components/TestComponent';
import Posts from './Components/Posts/Posts';
import React from 'react';
import UserProfile from './Components/UserProfile/UserProfile';


function App() {
  return (
    <div className="App">
       <div className='heading'>DataTable</div>
      <div className='iframe-container'>
      <CustomIframe className="data-table-container" title="custom iframe" width="100%" height="700px" >
        <DataTable />
      </CustomIframe>
      </div>
      <React.StrictMode>
      <Posts />
      <UserProfile />
      </React.StrictMode>
      <SideMenu />
    </div>
  // <TestComponent />
  );
}

export default App;
