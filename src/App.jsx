import Display from "./components/Display";
import EditData from "./components/EditData";
import Insert from "./components/Insert";
import Search from "./components/Search";
import Update from "./components/Update";
import Layout from "./Layout";
import Booking from "./components/Booking";
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Booked from "./components/Booked";

const App=()=>{ 
     
    return(
        <>
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Insert/>} />
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="myedit/:id" element={<EditData/>}/>
            <Route path="booking/:carno" element={<Booking/>}/>
            <Route path="booked" element={<Booked/>}/>

            </Route>
           </Routes>
           </BrowserRouter>
        </>
    )
}

export default App;