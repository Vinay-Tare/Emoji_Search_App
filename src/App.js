import { useEffect, useState } from 'react';
import './App.css';
import Emoji from "./components/EmojiComponent";
import Clipboard from 'clipboard';
import * as unicodeEmoji from 'unicode-emoji';



function App() {
  
  const emojiListCopy = unicodeEmoji.getEmojis();
  const[emojiList, setEmojiList] = useState(emojiListCopy);
  const[emojiSearchQuery, setEmojiSearchQuery] = useState("");

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
    if(emojiSearchQuery === "") {
      setEmojiList(emojiListCopy);
    }
    else {
      var queriedEmojiList = [];
      var searchKeywordArray = [];
      searchKeywordArray = emojiSearchQuery.toLowerCase().trim().split(" ");
      console.clear();
      emojiListCopy.forEach((emoji) => {
        emoji.keywords.forEach((keyword) => {
          searchKeywordArray.forEach((searchKeyword) => {
            if(keyword.toLowerCase().indexOf(searchKeyword) >= 0){
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
      <div className="jumbotron">
          <div className="container">       
            <div className="row">
              <div className="col-12 text-center">
                <h2>Emoji Search Application</h2>
              </div>
            </div>
          </div>
      </div>
      <div className="container">
          <div className="row d-flex justify-content-center p-5">
              <div className="col-md-9">
                <input type="text" className="form-control"
                placeholder="Search for a keyword.." id="search"
                value={emojiSearchQuery}
                onChange={(e) => setEmojiSearchQuery(e.target.value)}/>
              </div>
              <div className="py-3 py-md-0 col col-md-3">
                <button className="btn btn-block btn-outline-primary" 
                onClick={() => setEmojiSearchQuery("")}>Clear Search</button>
              </div>
          </div>          
          <div className="row">
            { emojiList.slice(0,100).map((emoji) => 
            <div className="col-6 col-md-2 py-4 d-flex justify-content-center">
              <Emoji key={emoji.emoji} emoji={emoji.emoji} description={emoji.description}/>
          </div>) }
        </div>
      </div>
    </div>
  );
}

export default App;
