import React, { PureComponent } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { SearchBar } from "./SearchBar";
import { sagaMiddleWare } from "./store/Store";
import { rootSaga } from "./store/sagas";
import { LoadingGif } from "./LoadingGif";
import { CityInfoDisplay } from "./CityInfoDisplay";
import { TempDisplay } from "./TempDisplay";
import { WindSpeedDisplay } from "./WindSpeedDisplay";

export class App extends PureComponent {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public constructor(props: {}) {
    super(props);
    sagaMiddleWare.run(rootSaga);
  }
  public render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ maxHeight: 250, objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              />
              <Card.Body>
                <Card.Title>
                  Welcome to &quot;What&apos;s the Weather Like&quot;
                </Card.Title>
                <Card.ImgOverlay>
                  Photo by{" "}
                  <a href="https://unsplash.com/@noaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    NOAA
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/weather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </Card.ImgOverlay>
                <Card.Text>
                  Use the search bar below to inquire about weather anywhere in
                  the world
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SearchBar />
        <LoadingGif />
        <Row>
          <Col md={3}>
            <CityInfoDisplay />
          </Col>
          <Col>
            <Row>
              <TempDisplay />
            </Row>
            <Row>
              <WindSpeedDisplay />
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
