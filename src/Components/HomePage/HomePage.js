import React from "react";
import { Row, Col } from "react-bootstrap";
import { cardData } from "../FakeData/FakeData";
import Navigation from "../Navigation/Navigation";
import "./HomePage.css";
import { Link, useHistory } from "react-router-dom";
const HomePage = () => {
  let history = useHistory();
  return (
    <div className="homePage">
      <Navigation></Navigation>
      <div className="homePage__cardContainer">
        <Row>
          {cardData.map((x) => (
            <Col lg={6} xl={3} className="cardBox">
              <div className="Card mb-xs-5 my-md-5" onClick={() => history.push(`/search/${x.id}`)}>
                <img src={x.img} alt="" />
                <h3>{x.title}</h3>
              </div>
              {/* <Link to={`/search/${x.id}`}>
                <div className="Card mb-xs-5 my-md-5">
                  <img src={x.img} alt="" />
                  <h3>{x.title}</h3>
                </div>
              </Link> */}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
