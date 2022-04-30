import React from "react";
import "./style.scss";

const Information = ({ country, statsDetail }) => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {statsDetail && Array.isArray(statsDetail) ? (
          statsDetail.map((item, index) => {
            return (
              <div className="box-item col-12 col-md-6 col-lg-4" key={index}>
                <div className="p-3 border bg-light">
                  <div className="box-body">
                    <h1 className="box-title">
                      <b>{country}</b>
                    </h1>
                    {item.region && (
                      <h2 className="box-subtitle mb-2">
                        <b>{item.region}</b>
                      </h2>
                    )}
                    <p className="box-text">
                      Confirmed Covid Cases:&nbsp;
                      <span className="confirmed-color number-size">
                        {item.confirmed}
                      </span>
                    </p>
                    <p className="box-text">
                      Recovered Patients:&nbsp;
                      <span className="recovery-color number-size">
                        {item.recovered}
                      </span>
                    </p>
                    <p className="box-text">
                      Patient Deaths:&nbsp;
                      <span className="deaths-color number-size">
                        {item.deaths}
                      </span>
                    </p>
                    <p className="box-text">
                      Information Updated:&nbsp;
                      {new Date(item.updated).toLocaleDateString(
                        "en-US",
                        "mm/dd/yyyy"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="box-item col-12 col-md-6 col-lg-4">
              <div className="p-3 border bg-light">
                <div className="box-body">
                  <h1 className="box-title">
                    <b>{country}</b>
                  </h1>
                  {statsDetail.region && (
                    <h2 className="box-subtitle mb-2">
                      <b>{statsDetail.region}</b>
                    </h2>
                  )}
                  <p className="box-text">
                    Confirmed Covid Cases:&nbsp;
                    <span className="confirmed-color number-size">
                      {statsDetail.confirmed}
                    </span>
                  </p>
                  <p className="box-text">
                    Recovered Patients:&nbsp;
                    <span className="recovery-color number-size">
                      {statsDetail.recovered}
                    </span>
                  </p>
                  <p className="box-text">
                    Patient Deaths:&nbsp;
                    <span className="deaths-color number-size">
                      {statsDetail.deaths}
                    </span>
                  </p>
                  <p className="box-text">
                    Information Updated:&nbsp;
                    {new Date(statsDetail.updated).toLocaleDateString(
                      "en-US",
                      "mm/dd/yyyy"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
  // return (
  //   <div class="container">
  //     <div class="row g-2">
  //       <div class="col-6">
  //         <div class="p-3 border bg-light">Custom column padding</div>
  //       </div>
  //       <div class="col-6">
  //         <div class="p-3 border bg-light">Custom column padding</div>
  //       </div>
  //       <div class="col-6">
  //         <div class="p-3 border bg-light">Custom column padding</div>
  //       </div>
  //       <div class="col-6">
  //         <div class="p-3 border bg-light">Custom column padding</div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Information;
