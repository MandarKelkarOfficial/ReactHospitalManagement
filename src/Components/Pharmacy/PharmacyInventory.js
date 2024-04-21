import React from "react";

export default function PharmacyInventory() {
  return (
    <div className="container mt-5">
      <div className="container d-flex justify-content-center align-items-center  ">
        <div
          className="card shadow-md"
          style={{
            width: "35rem",
          }}
        >
          <div className="card-body ">
            <h3 className="card-title  ">INVENTORY</h3>
            <div className="card-form">
              <form action="">
              <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Paracitomol"
                  />
                  <label htmlFor="floatingInput">Paracitomol</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Ofloxin"
                  />
                  <label htmlFor="floatingInput">Ofloxin</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Glycomate"
                  />
                  <label htmlFor="floatingInput">Glycomate</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Insulin"
                  />
                  <label htmlFor="floatingInput">Insulin</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Amoxil"
                  />
                  <label htmlFor="floatingInput">Amoxil</label>
                </div>
                <div className="row w-full">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="reset"
                      className="btn btn-outline-secondary w-100"
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
                <div className="row w-full mt-3">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-success w-100"
                    >
                      AVAILABLE STOCK
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
