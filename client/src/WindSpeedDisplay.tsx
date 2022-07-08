import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useSearchReduxProps } from "./hooks/SeachHooks";

export const WindSpeedDisplay = () => {
  const searchProps = useSearchReduxProps();
  return searchProps.isSearching || !searchProps.wind ? null : (
    <>
      <Col>
        <Row>
          <Col>Wind Speed: {searchProps.wind.speed.toFixed(2)} meter/sec</Col>
        </Row>
      </Col>
      <Col>
        {searchProps.wind.speed > 7 ? (
          <video
            src="https://media0.giphy.com/media/nI3hgTqQWhOV8WYtYF/giphy.mp4?cid=ecf05e477vju1s9gwjppa717hajo23e6cdinn6a6nwfo9611&amp;rid=giphy.mp4&amp;ct=g"
            poster="https://media0.giphy.com/media/nI3hgTqQWhOV8WYtYF/giphy_s.gif?cid=ecf05e477vju1s9gwjppa717hajo23e6cdinn6a6nwfo9611&amp;rid=giphy_s.gif&amp;ct=g"
            autoPlay
            loop
          ></video>
        ) : (
          <video
            src="https://media2.giphy.com/media/3orifetCz2eogxmqly/giphy.mp4?cid=790b7611a7ec70e5d0d950688bf23a0eb4fa158ee20b9f6b&amp;rid=giphy.mp4&amp;ct=g"
            poster="https://media2.giphy.com/media/3orifetCz2eogxmqly/giphy_s.gif?cid=790b7611a7ec70e5d0d950688bf23a0eb4fa158ee20b9f6b&amp;rid=giphy_s.gif&amp;ct=g"
            autoPlay
            loop
          ></video>
        )}
      </Col>
    </>
  );
};
