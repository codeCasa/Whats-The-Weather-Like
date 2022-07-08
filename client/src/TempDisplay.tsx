import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useSearchReduxProps } from "./hooks/SeachHooks";

export const TempDisplay = () => {
  const searchProps = useSearchReduxProps();
  return searchProps.isSearching || !searchProps.temp ? null : (
    <>
      <Col>
        <Row>
          <Col>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col>
                  <Form.Check
                    type={"radio"}
                    label={"Celsius"}
                    onChange={() => searchProps.setShowTempInCelsius(true)}
                    checked={searchProps.showingTempInCelsius}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type={"radio"}
                    label={"Fahrenheit"}
                    onChange={() => searchProps.setShowTempInCelsius(false)}
                    checked={!searchProps.showingTempInCelsius}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            Actual: {searchProps.temp.actual.toFixed(2)}°
            {searchProps.showingTempInCelsius ? "C" : "F"}
          </Col>
        </Row>
        <Row>
          <Col>
            Feels Like: {searchProps.temp.feelsLike.toFixed(2)}°
            {searchProps.showingTempInCelsius ? "C" : "F"}
          </Col>
        </Row>
        <Row>
          <Col>
            Min: {searchProps.temp.min.toFixed(2)}°
            {searchProps.showingTempInCelsius ? "C" : "F"}
          </Col>
        </Row>
        <Row>
          <Col>
            Max: {searchProps.temp.max.toFixed(2)}°
            {searchProps.showingTempInCelsius ? "C" : "F"}
          </Col>
        </Row>
      </Col>
      <Col>
        {searchProps.needAJacket ? (
          <video
            src="https://media2.giphy.com/media/hnl83xVQxpqJG/giphy.mp4?cid=790b76110313f140119f1ab94a63502a8612469517633d07&amp;rid=giphy.mp4&amp;ct=g"
            poster="https://media2.giphy.com/media/hnl83xVQxpqJG/giphy_s.gif?cid=790b76110313f140119f1ab94a63502a8612469517633d07&amp;rid=giphy_s.gif&amp;ct=g"
            autoPlay
            loop
          ></video>
        ) : (
          <video
            src="https://media4.giphy.com/media/Kxas7qJCi8q1yw0sKh/giphy.mp4?cid=790b76114f8718e316ef119973c02f330412e91467f6e1e4&amp;rid=giphy.mp4&amp;ct=g"
            poster="https://media4.giphy.com/media/Kxas7qJCi8q1yw0sKh/giphy_s.gif?cid=790b76114f8718e316ef119973c02f330412e91467f6e1e4&amp;rid=giphy_s.gif&amp;ct=g"
            autoPlay
            loop
          ></video>
        )}
      </Col>
    </>
  );
};
