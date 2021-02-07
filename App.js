import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';

export default class app extends Component {

  render() {
    return (
      <WebView
        style={{ flex: 1, width: '100%', height: '100%' }}
        originWhitelist={["*"]}
        //source={{ uri: 'https://tv-tut-part2.glitch.me/' }}
        source={{ uri: 'file:///android_asset/index.html' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        // onShouldStartLoadWithRequest={() => false}
        injectedJavaScript={this.jsToInject}
        onMessage={(event) => {
          const data = JSON.parse(event.nativeEvent.data)
          if (data.type == "onIntervalChanged") {
            ToastAndroid.show("Interval = " + data.interval, ToastAndroid.SHORT);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app', () => app);