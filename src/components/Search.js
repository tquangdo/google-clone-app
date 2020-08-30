import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../datalayer/StateProvider";
import { SET_SEARCH_TERM } from "../datalayer/action/ActionType";

function Search({ isHideButtons = false, term = '' }) {
  const [, dispatch] = useStateValue();
  const [stateInput, stateSetInput] = useState("");
  const history = useHistory();
  const onSearch = e => {
    e.preventDefault();
    console.log("u searched: ", stateInput);
    dispatch({
      type: SET_SEARCH_TERM,
      term: stateInput,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={stateInput ? stateInput : term} onChange={e => stateSetInput(e.target.value)} />
        <MicIcon />
      </div>

      {!isHideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={onSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search__buttonsHidden">
            <Button
              className="search__buttonsHidden"
              type="submit" onClick={onSearch} variant="outlined">
              Google Search
          </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}
    </form>
  );
}

export default Search;
