import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import Home from "./home";
import { getAllList } from "../actions/playListActions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllList());
  }
  render() {
    const { myList, recList } = this.props;
    return (
      <div className="container-fluid">
        <Menu />
        <Home myList={myList} recList={recList} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    allList: state.allList,
    myList: state.allList.mylist,
    recList: state.allList.recommendations
  };
};

export default connect(mapStateToProps)(App);
