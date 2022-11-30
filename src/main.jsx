import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './09-useContext/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
