import React from "react";
import MyList from "./MyList";
import RecommendationsList from "./RecommendationsList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { myList, recList } = this.props;
    return (
      <section id="home">
        <div className="content">
          <h3>My List</h3>
          <MyList myList={myList} />
        </div>
        <div className="content">
          <h3>Recommendations</h3>
          <RecommendationsList recList={recList} />
        </div>
      </section>
    );
  }
}
module.exports = Home;
