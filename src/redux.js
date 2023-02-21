import rootReducer from "./store/reduceers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";


const reduxStore = () => {
    const store = createStore(rootReducer) // middleware
    const persistor = persistStore(store)

    return {store, persistor}

}

export default reduxStore;