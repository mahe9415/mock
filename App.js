import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import storeConfig from './store/store';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from "./src/components/Home";
import Tab1 from "./src/components/Tab1";
import Tab2 from "./src/components/Tab2";
import Login from "./src/components/Login";
import List from "./src/components/List";
import ListDetails from "./src/components/ListDetails";
import storage from "./src/components/storage";
import Mapify from "./src/components/Mapify";
import ChooseMapModal from "./src/components/ChooseMapModal";
import Geo from "./src/components/Geo";
import CheckPopup from "./src/components/CheckPopup";


let initialState={}

const store = storeConfig(initialState);
// Register all screens here

Navigation.registerComponent("mock.Home",()=> Home, store, Provider); 
Navigation.registerComponent("mock.Tab1",()=> Tab1, store, Provider); 
Navigation.registerComponent("mock.Tab2",()=> Tab2, store, Provider); 
Navigation.registerComponent("mock.List",()=> List, store, Provider); 
Navigation.registerComponent("mock.Login",()=> Login, store, Provider); 
Navigation.registerComponent("mock.Mapify",()=> Mapify, store, Provider); 
Navigation.registerComponent("mock.ListDetails",()=> ListDetails, store, Provider); 
Navigation.registerComponent("mock.storage",()=> storage, store, Provider); 
Navigation.registerComponent("mock.Geo",()=> Geo, store, Provider); 
Navigation.registerComponent("mock.CheckPopup",()=> CheckPopup, store, Provider); 
Navigation.registerComponent("mock.ChooseMapModal",()=> ChooseMapModal, store, Provider); 


// Start a App


 const startSingleScreenApp = () =>{
Navigation.startSingleScreenApp({
  screen:{
  screen:"mock.List",
  title:"List",
  initilal:true
}
})
}


export const startTabApp = () => {
  Promise.all([
      Icon.getImageSource("md-map",30),
      Icon.getImageSource("ios-share-alt",30)
    ]).then(icons =>{
        Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One', // tab label as appears under the icon in iOS (optional)
      screen: 'mock.List', // unique ID registered with Navigation.registerScreen
      title: 'List',
      icon:icons[0],// title of the screen as appears in the nav bar (optional)
      navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
      navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
    },
    {
      label: 'Three',
      screen :'mock.Mapify',
      icon:icons[1],
      title:'Screen Three'
    }
  ],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
    tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
    tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
    initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
  },
  appStyle: {
    orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
    bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
    hideBackButtonTitle: true // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'mock.Home', // unique ID registered with Navigation.registerScreen
      // passProps: {} ,// simple serializable object that will pass as props to all top screens (optional),
      fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
    },
    right: { // optional, define if you want a drawer from the right
      screen: 'mock.Tab1', // unique ID registered with Navigation.registerScreen
      // passProps: {} // simple serializable object that will pass as props to all top screens (optional)
      fixedWidth: 500, // a fixed width you want your right drawer to have (optional)
    },
    style: { // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
      rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
      shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
})
}
 


export default startSingleScreenApp