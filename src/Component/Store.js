
import { applyMiddleware, createStore ,compose} from "redux";
import { getFirebase ,reactReduxFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from './Congif';
import reducers from './MianReducer'

var Store = createStore(reducers,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(firebase),
reduxFirestore(firebase),
))

export default Store;
