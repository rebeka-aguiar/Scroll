import React from "react";
import Loader from "./hooks/useInfiniteScroll";

function App() {
  const data = Loader();

  return (
    <div className="container-fluid">
      <div className="row text-center mt-5">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} className="col-md-4 col-sm-6 my-2">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
