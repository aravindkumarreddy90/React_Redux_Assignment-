import React from "react";
import { connect } from "react-redux";
import { addItemToMyList } from "../actions/playListActions";

class RecommendationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveringId: null
    };
    this.addItem = this.addItem.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  addItem(item) {
    this.props.dispatch(addItemToMyList(item));
  }
  onMouseEnter(id) {
    this.setState({ hoveringId: id });
  }
  onMouseLeave(id) {
    this.setState({ hoveringId: null });
  }
  render() {
    const { recList } = this.props;
    const { hoveringId } = this.state;
    return (
      <div className='play_list'>
        {recList.map(item => {
          const hovering = hoveringId === item.id;
          return (
            <div
              key={item.id}
              className='card'
              onMouseEnter={() => this.onMouseEnter(item.id)}
              onMouseLeave={() => this.onMouseLeave(item.id)}
            >
              <div>
                <img src={item.img} alt="Recommendation list picture" title={item.img} />
              </div>
              <div>
                <button
                  className={hovering ? "blue" : "hide"}
                  onClick={() => this.addItem(item)}
                >
                  Add
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
export default connect(mapStateToProps)(RecommendationsList);
