import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt,source } = this.props;
    return (
      <div className="card" data-bs-theme="dark">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}>
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-danger"
            data-bs-theme="dark"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}
