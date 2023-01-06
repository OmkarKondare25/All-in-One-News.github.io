import React from "react";

const NewItem = (props) => {
  let { Title, Description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {Title}
            <span className="badge rounded-pill text-bg-info mx-2">
              {source}
            </span>
          </h5>
          <p className="card-text">{Description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
