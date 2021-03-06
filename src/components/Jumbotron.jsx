import React from "react";

function Jumbotron() {
  return (
    <div className="my-3">
      <div className="jumbotron px-3 border">
        <h1 className="display-4">A Warm Welcome</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action
          </a>
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
