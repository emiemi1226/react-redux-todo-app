/*データベースに登録するためのBeans
 *
 *モデルの作成の方法がこれであっているのか確認する
 *
 */
import { Record } from "immutable";


const ListRecord = Record({
  id: null,//削除等に利用するキー
  registDate: "" ,//登録日
  reRegistDate: "",//編集日
  toDoName: "",//やること
  pliorityLevel: 4,//重要度 0 ~ 9で測る
  rapidLevel: 4,//緊急度 0 ~ 9
  detail: "",//登録内容詳細
  delFlg: false,//削除フラグ
  endFlg: false,//終了フラグ
});





class listData extends ListRecord {
  isNew(){
    return this.id === null;
  }
} 




export default listData;