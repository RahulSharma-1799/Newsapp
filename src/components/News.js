import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="this is title" description="hii akdfa s sdf"/> 
          </div>
          <div className="col-md-4">
            <NewsItem title="this is title" description="hii akdfa s sdf"/> 
          </div>
          <div className="col-md-4">
            <NewsItem title="this is title" description="hii akdfa s sdf"/> 
          </div>
        </div>
      </div>
    );
  }
}