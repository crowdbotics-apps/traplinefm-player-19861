import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList95261Navigator from '../features/ArticleList95261/navigator';
import ArticleList95260Navigator from '../features/ArticleList95260/navigator';
import ArticleList95259Navigator from '../features/ArticleList95259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList95261: { screen: ArticleList95261Navigator },
ArticleList95260: { screen: ArticleList95260Navigator },
ArticleList95259: { screen: ArticleList95259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
