import React from "react";
import { connect } from "react-redux";
import { removeItemFromMyList } from "../actions/playListActions";

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringId: null
    };
    this.removeItem = this.removeItem.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  removeItem(item) {
    this.props.dispatch(removeItemFromMyList(item));
  }
  onMouseEnter(id) {
    this.setState({ hoveringId: id });
  }
  onMouseLeave(id) {
    this.setState({ hoveringId: null });
  }
  render() {
    const { myList } = this.props;
    const { hoveringId } = this.state;
    return (
      <div className='play_list'>
        {myList.map(item => {
          const hovering = hoveringId === item.id;
          return (
            <div
              key={item.id}
              className='card'
              onMouseEnter={() => this.onMouseEnter(item.id)}
              onMouseLeave={() => this.onMouseLeave(item.id)}
            >
              <div>
                <img src={item.img} alt="My List Picture" title={item.img} />
              </div>
              <div>
                <button
                  className={hovering ? "red" : "hide"}
                  onClick={() => this.removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    allList: state.allList
  };
};
export default connect(mapStateToProps)(MyList);
