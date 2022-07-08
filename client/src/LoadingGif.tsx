import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSearchReduxProps } from "./hooks/SeachHooks";

export const LoadingGif = () => {
  const searchProps = useSearchReduxProps();
  return !searchProps.isSearching ? null : (
    <Row>
      <Col style={{ textAlign: "center" }}>
        <Image
          style={{
            maxHeight: 125,
          }}
          src="https://media4.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47y1z9a5qcgv2x2g814n8g8yp4yp0i9vxkcq9h9bwk&rid=giphy.gif&ct=g"
          fluid
        />
      </Col>
    </Row>
  );
};
