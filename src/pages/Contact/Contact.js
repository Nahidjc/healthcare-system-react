import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateTimePicker from "@mui/lab/StaticDateTimePicker";

const Contact = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <div className="row mt-5">
      <div className="col-md-8 mx-auto">
        <div className="row gx-5">
          <div className="col-md-5 ">
            <div className="border-2 shadow">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateTimePicker
                  displayStaticWrapperAs="desktop"
                  openTo="year"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="p-5 shadow ">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control border"
                  />
                  <label className="form-label" htmlFor="form4Example1">
                    Name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form4Example2"
                    className="border form-control"
                  />
                  <label className="form-label" htmlFor="form4Example2">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <textarea
                    className="border form-control"
                    id="form4Example3"
                    rows="4"
                  ></textarea>
                  <label className="form-label" htmlFor="form4Example3">
                    Message
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form4Example4"
                  />
                  <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this message
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
