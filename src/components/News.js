import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading : false,
      page:1,
      
    };
  }
  static defaultProps ={
    category: 'general',
    pageSize: 6,
  };

  static propTypes ={
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  async update(){
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=09a5f79639a14b9e83a2cb2d0c7fa0c5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles : parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading:false,
    })

  }
  async componentDidMount(){
    this.update();
  }

  handlePreviousClick= async ()=>{
    this.setState({
      page: this.state.page - 1
    })
    this.update();
  }
  handleNextClick= async ()=>{
    if(!(this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize))){
      this.setState({
        page: this.state.page - 1
      })
      this.update();
    }
    
  }

  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1 className="text-center my-3">News<span className="text-danger">Horn 📢</span> - Top Headlines </h1>
          <br />
          {this.state.loading && <Spinner/>}
          <div className="row card-deck text-center">
            {!this.state.loading && this.state.articles.map((item) => {
              return (
                <div key={item.url} className="col-md-4 my-3 text-center">
                  <NewsItem
                    
                    title={item.title?item.title:""}
                    description={item.description?item.description:""}
                    imageUrl={item.urlToImage?item.urlToImage:"https://media.istockphoto.com/id/1221950506/vector/live-breaking-news-headline-with-blue-and-red-color-background.jpg?s=612x612&w=0&k=20&c=Oik101ifQd_iSb4ea7KA8hYpIUrgVZxYsQYObUB14aE="}
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
        <div className="container my-3 d-flex justify-content-between">
          <button className="btn btn-danger" data-bs-theme="dark"  disabled={this.state.page <=1} onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button className="btn btn-danger" data-bs-theme="dark" disabled={this.state.page >= Math.ceil(this.state.totalResults /  this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </>
    );
  }
}
