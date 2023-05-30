import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=77e57a64d9a845fba5948edc6d54fe76&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults });
  }
  handleNext = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20 )) {
      
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77e57a64d9a845fba5948edc6d54fe76&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      //console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handlePrevious = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77e57a64d9a845fba5948edc6d54fe76&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          ;
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
