/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ToDoList from "./compornents/ToDoList";
import reducers from "./reducers";
import Router from "./router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

export default class App extends Component {
  render() {
    const store = createStore(reducers);

    //  }
    //アプリの画面の組み立て
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
