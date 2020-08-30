import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../datalayer/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// Mock API
// import Response from "../response";
function SearchPage() {
  const [{ term }] = useStateValue();
  // Live API Call
  const { data } = useGoogleSearch(term);
  // Mock API
  //http://localhost:3000/search > search KW "react"
  //F12 > Network > tab "Name" click vô v1?key=...
  // tab phải click "Response" > copy paste all text
  // const data = Response;
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search isHideButtons term={term} />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                News
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                Images
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                Shopping
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                Maps
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                More
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                Settings
              </div>
              <div className="searchPage__option">
                Tools
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {/* About 21,000 results (0.31 seconds) for "searchKW" */}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
              seconds) for {term}
          </p>
          {data?.items.map((item, chiso) => (
            <div key={chiso} className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
