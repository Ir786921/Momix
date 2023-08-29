import { configureStore } from "@reduxjs/toolkit";
import Wishlistslice from "./listslice";

const Store = configureStore({
    reducer:{
        wishlist:Wishlistslice,
    }
});
export default Store;