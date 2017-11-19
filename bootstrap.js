import './src/common/global'

import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Navigation} from 'react-native-navigation'
import thunk from 'redux-thunk'

import * as loginActions from './src/redux/reducers/login/actions'
import reducers from './src/redux/reducers'
import { registerScreens } from './src/routes'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class Bootstrap {
  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(loginActions.login());
  }

  onStoreUpdate() {
    const state = store.getState();
    this.startApp(state.login.root);
  }

  startApp(root) {
    switch (root) {
      case 'login':
        console.log('start app login');

        Navigation.startSingleScreenApp({
          screen: {
            screen: 'lt.login'
          },
          passProps: {
            name:'stephen',
            num: 1234,
            cb: function() {
              return 'Hello from a function!';
            }
          }
        });


        break;
      case 'loginOut':
        console.log('start app login out');
        break;
      default:
        console.log('start app default');
    }
  }
}
