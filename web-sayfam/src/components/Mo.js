import React from "react";
import img from "../Assets/9C6BB119-4D9F-45F0-B1FD-9E332E9EF7BA-35928-0000062DD430959D (1).jpg";

export const Mo = () => {
  return (
    <div>
      <img src={img} data-bs-toggle="modal" data-bs-target="#image"></img>

      <div className="modal fade" id="image" tavIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body"></div>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img src={img} className="block w-[100]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
