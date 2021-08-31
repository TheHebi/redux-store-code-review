// imports createStore from the redux package, this allows you to create a store that holds your global state for your application.
import { createStore } from 'redux';
// imports your reducer file for use with the store
import reducers from './reducers';
// exports createStore using imported reducers. This creates the store for your application
export default createStore(reducers);