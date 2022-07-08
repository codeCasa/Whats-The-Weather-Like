/* eslint-disable prettier/prettier */
import React, { SyntheticEvent } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchReduxProps } from "./hooks/SeachHooks";

export const SearchBar = () => {
  const searchProps = useSearchReduxProps();
  const cityRef = React.useRef<HTMLInputElement>(null);
  const search = React.useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    searchProps.search(cityRef.current?.value ?? "Seattle");
  }, [searchProps]);

  return (
    <Row>
      <Col>
        <Form onSubmit={search}>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter name of city"
              ref={cityRef}
            />
            <Button
              variant="success"
              type="submit"
              disabled={searchProps.isSearching}
            >
              Axios Search
            </Button>
            <Button
              variant="info"
              type="submit"
              disabled={searchProps.isSearching}
            >
              Apollo Search
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};
