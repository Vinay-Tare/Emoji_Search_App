import { useEffect, useState } from "react";
import "./App.css";
import Clipboard from "clipboard";
import * as unicodeEmoji from "unicode-emoji";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/HeaderComponent";
import Emoji from "./components/EmojiComponent";

function App() {
  const emojiListCopy = unicodeEmoji.getEmojis();
  const [emojiList, setEmojiList] = useState(emojiListCopy);
  const [emojiSearchQuery, setEmojiSearchQuery] = useState("");

  useEffect(() => {
    const clipboard = new Clipboard(".emoji");
    return () => {
      clipboard.destroy();
    };
  });

  useEffect(() => {
    doSearch();
  }, [emojiSearchQuery]);

  const doSearch = () => {
    if (emojiSearchQuery === "") {
      setEmojiList(emojiListCopy);
    } else {
      var queriedEmojiList = [];
      var searchKeywordArray = [];
      searchKeywordArray = emojiSearchQuery.toLowerCase().trim().split(" ");
      console.clear();
      emojiListCopy.forEach((emoji) => {
        emoji.keywords.forEach((keyword) => {
          searchKeywordArray.forEach((searchKeyword) => {
            if (keyword.toLowerCase().indexOf(searchKeyword) >= 0) {
              queriedEmojiList.push(emoji);
            }
          });
        });
      });
      setEmojiList(queriedEmojiList);
    }
  };

  return (
    <div className="App">
      <Header
        emojiSearchQuery={emojiSearchQuery}
        setEmojiSearchQuery={setEmojiSearchQuery}
      />
      <Container>
        <Row>
          {emojiList.slice(0, 100).map((emoji) => (
            <Col xs="6" md="2" className="py-4 d-flex justify-content-center">
              <Emoji
                key={emoji.emoji}
                emoji={emoji.emoji}
                description={emoji.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
