import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid my-3" >
        <h1 className="text-center my-3">About News<span className="text-danger">Horn 📢</span></h1>
        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is News<span className="text-danger">Horn</span>?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NewsHorn is a news application that provides users with the latest top news from various sources across the globe. It utilizes the News API to fetch up-to-date and relevant news articles.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does it work?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NewsHorn fetches the latest top news using the News API. It organizes and displays the news articles in a user-friendly and easily accessible manner, allowing users to stay informed about current events and important happenings.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why use News<span className="text-danger">Horn</span>?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              NewsHorn offers a convenient and efficient way to access the latest news from diverse sources. It provides a curated selection of top news articles, making it easier for users to stay updated on global events, trends, and developments.
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
