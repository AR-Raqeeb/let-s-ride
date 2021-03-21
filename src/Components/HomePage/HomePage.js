import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cardData } from "../FakeData";
import Navigation from "../Navigation/Navigation";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  let history = useHistory();
  return (
    <div className="homePage">
      <Navigation></Navigation>
      <div className="homePage__cardContainer">
        <Row>
          {cardData.map((x) => (
            <Col lg={6} xl={3} className="cardBox">
              <div className="Card mb-xs-5 my-md-5" onClick={() => history.push("/login")}>
                <img src={x.img} alt="" />
                <h3>{x.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
