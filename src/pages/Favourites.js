import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

import MeetupList from "../components/meetups/MeetupList";

let FavouritesPage=()=>{
    const favouriteCtx=useContext(FavouritesContext)
    return(
        <section>
            <h1>My Favourites</h1>
            <MeetupList meetups={favouriteCtx.favourites}></MeetupList>
        </section>
    )
}

export default FavouritesPage;