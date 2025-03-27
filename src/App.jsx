import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { useParams } from 'react-router'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailBoxForm from './components/MailboxForm/MailBoxForm.jsx'



function App() {
 
  const [mailboxes, setMailboxes] = useState([{
    _id: '',
    boxOwner: '',
    boxSize: ''
  }]);


  const handleAddBox = (newBox) => {
setMailboxes(...mailboxes, newBox)
  }

  return (
    <>
    <NavBar />
    <h1>The Post Office!</h1>
    <Routes>
      <Route path='/' element={<h3>HomePage</h3>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes._id} />}/>
      <Route path='/new-mailbox' element={<MailBoxForm handleAddBox={handleAddBox}/>}/>
    </Routes>
    </>
  )
};

export default App;
