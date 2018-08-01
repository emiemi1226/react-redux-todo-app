import { connect } from "react-redux";

import ToDoList from "../compornents/ToDoList";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoList);
