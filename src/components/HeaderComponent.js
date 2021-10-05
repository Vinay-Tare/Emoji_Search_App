import { Jumbotron, Input, Button, Container, Row, Col } from "reactstrap";

function Header({ emojiSearchQuery, setEmojiSearchQuery }) {
  return (
    <div className="header">
      <Jumbotron>
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Emoji Search Application</h2>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="p-4">
          <Col md="9">
            <Input
              type="text"
              placeholder="Search for a keyword.."
              id="search"
              value={emojiSearchQuery}
              onChange={(e) => setEmojiSearchQuery(e.target.value)}
            />
          </Col>
          <Col md="3" className="py-3 py-md-0">
            <Button
              outline
              color="primary"
              block
              onClick={() => setEmojiSearchQuery("")}
            >
              Clear Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
