import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import * as Updates from 'expo-updates';
import { Asset } from 'expo-asset';

import { Provider } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import Route from './src/routes/route';

import { store, persistor } from './src/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [updateMsg, setUpdateMsg] = useState('');

  useEffect(() => {
    onLoad();
  }, []);

  const _loadResourcesAsync = async () => {
    return Promise.all([
      /*Asset.loadAsync([
        require('./assets/images/logo.png')
      ]),*/
      Font.loadAsync({
        'PopRegular': require('./assets/fonts/Poppins-Regular.ttf'),
        'PopLight': require('./assets/fonts/Poppins-Light.ttf'),
        'PopBold': require('./assets/fonts/Poppins-Bold.ttf'),
        'PopMedium': require('./assets/fonts/Poppins-Medium.ttf'),
      }),
    ]);
  };

  // CHECK ATUALIZAÇÕES E CARREGA ASSETS E FONTS
  const onLoad = async () => {
    if (__DEV__) {
      setUpdateMsg("Carregando");
      _loadResourcesAsync().then(() => {
        setAssetsLoaded(true);
      });
    } else {
      try {
        setUpdateMsg("Verificando atualizações");
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setUpdateMsg("Baixando atualizações");
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        } else {
          setUpdateMsg("Carregando");
          _loadResourcesAsync().then(() => {
            setAssetsLoaded(true);
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    assetsLoaded ?
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar style='light' />
            <Route />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      :
      <View />
  );
}

export default App;