import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import UpdateInfo from './Components/Register/updateInfo'
import Profile from './Components/Dashboard/Components/Profile/MainProfile'
import AnnualPe from './Components/Dashboard/Components/Annual/AnnualPe'
import OnlinePe from './Components/Dashboard/Components/Annual/Online/OnlinePE'
import OnlineSubmission from './Components/Dashboard/Components/Annual/Online/Submission/OnlineSubmission'

import{
  createBrowserRouter,
  RouterProvider 
}from'react-router-dom'
import Form5 from './Components/Dashboard/Components/Annual/Online/Submission/DocumentUploader/Form5/Form5'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/updateInfo',
    element: <div><UpdateInfo/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/myProfile',
    element: <div><Profile/></div>
  },
  {
    path: '/annualPE',
    element: <div><AnnualPe/></div>
  },
  {
    path: '/onlinePE',
    element: <div><OnlinePe/></div>
  },
  {
    path: '/onlineSub',
    element: <div><OnlineSubmission/></div>
  },
  {
    path: '/form5',
    element: <div><Form5/></div>
  },
])
function App() {


  return (
    <div>
     <RouterProvider router = {router}/>
    </div>
  )
}

export default App
