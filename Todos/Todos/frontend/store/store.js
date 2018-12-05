import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import Thunk from '../middleware/thunk';

const configureStore = () => createStore(rootReducer, applyMiddleware(Thunk));

export default configureStore;
