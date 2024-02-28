import { Route,Routes } from "react-router-dom";


import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
    <Routes>
      <Route path="" Component={AllMeetupsPage}/>
      <Route path="favourites" Component={FavouritesPage}/>
      <Route path="new-meetup" Component={NewMeetupsPage}/>
    </Routes>
    </Layout>
  );
}

export default App;
