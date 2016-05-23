import React, {
	Platform,
	BackAndroid
} from 'react-native';

import * as View from '../view';
import * as SceneConfig from '../config/sceneConfig';

class Router {
	constructor(navigator) {
		this.navigator = navigator;

		/*
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', ()=> {
				const routesList = this.navigator.getCurrentRoutes();
				const currentRoute = routesList[routesList.length - 1];
				if (currentRoute.name !== 'main') {
					navigator.pop();
					return false;
				}
				return true;
			});
		}
		*/
	}

	pop() {
		this.navigator.pop();
	}

	push(props = {}, route) {
		route.props = props;
		route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight;
		route.component = route.component;
		this.navigator.push(route);
	}

	toAbout(props) {
		this.push(props, {
			component: View.About,
			name: 'about',
			sceneConfig: SceneConfig.customFloatFromRight
		});
	}

	toPost(props) {
		this.push(props, {
			component: View.Post,
			name: 'post',
			sceneConfig: SceneConfig.customFloatFromRight
		});
	}
}


export default Router;