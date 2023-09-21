import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  }
  static defaultProps = {
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.props.setProgress(0);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.update();
  }
 
   fetchMoreData = async () => {
    this.setState(
      {
        page :this.state.page + 1,
        loading: true,
      }
    )
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });

  };
  render() {
    return (
      <>
        
          <h1 className="text-center my-3">
            News<span className="text-danger">Horn 📢</span> - Top Headlines{" "}
          </h1>
          <br />
          
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length <= this.state.totalResults}
              loader={<Spinner/>}
            > 
              <div className="container">

                <div className="row">
                  {
                    this.state.articles.map((item) => {
                      return (
                        <div key={item.url} className="col-md-4 my-2">
                          <NewsItem
                            title={item.title ? item.title : ""}
                            description={item.description ? item.description : ""}
                            imageUrl={
                              item.urlToImage
                                ? item.urlToImage
                                : "https://media.istockphoto.com/id/1221950506/vector/live-breaking-news-headline-with-blue-and-red-color-background.jpg?s=612x612&w=0&k=20&c=Oik101ifQd_iSb4ea7KA8hYpIUrgVZxYsQYObUB14aE="
                            }
                            newsUrl={item.url}
                            author={item.author}
                            publishedAt={item.publishedAt}
                            source={item.source.name}
                          />
                        </div>
                      );
                    })}
                  </div>
              </div>
            </InfiniteScroll>
        
        
      </>
    );
  }
}
