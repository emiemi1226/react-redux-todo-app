/**
 * 顧客情報新規追加用部分のコンポーネント
 */
import React, { Component } from "react";

//connectのインポート宣言を行う
// → connectを用いてstoreをpropで読めるようにする
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
//コンポーネントの内容を定義する ※ ClassComponent
class ToDoList extends Component {
  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {}

  //見た目データのレンダリングを行う
  render() {
    return (
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    );
  }
}

//ステートから値を取得してthis.propsにセットする
// → 内容は「reducers/index.js」を参照
// ※ Reducerにあるものを再度詰め直しを行うイメージ
const mapStateToProps = state => {
  return {};
};

//インポート可能にする宣言
export default connect(
  mapStateToProps,
  {}
)(ToDoList);
