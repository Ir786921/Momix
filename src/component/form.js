import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container-sm tw-h-screen">
      <div className="row-sm tw-h-screen">
        <div className="col-sm-12 tw-h-screen">
          <div className="form-container tw-flex tw-justify-center tw-justify-items-center tw-h-screen tw-items-center">
            <form
              action=""
            
              className="tw-bg-sky-900 tw-w-4/5 tw-h-3/4 tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-lg"
            >
              <div className="mb-2">
        
                <label htmlFor="name" className="form-label tw-text-white tw-text-center tw-text-2xl">
                  Name :
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control tw-block tw-w-80 tw-m-2 tw-p-2 tw-rounded-md tw-md:tw-w-fit"
                  />
                </label>
              </div>
              <div className="mb-2">
        
                <label htmlFor="username" className="form-label tw-text-white tw-text-center tw-text-2xl">
                  UserName :
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control tw-block tw-w-80 tw-m-2 tw-p-2 tw-rounded-md tw-md:tw-w-fit"
                  />
                </label>
              </div>

              <div className="mb-2">
        
                <label htmlFor="email" className="form-label tw-text-white tw-text-center tw-text-2xl">
                  Email :
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control tw-block tw-w-80 tw-m-2 tw-p-2 tw-rounded-md tw-md:tw-w-fit"
                  />
                </label>
              </div>
              <div className="mb-2">
                <label htmlFor="sumbit" className="form-label ">
                <Link to="/home" type="submit" value="Submit" className="form-control tw-block tw-w-80 tw-m-2 tw-p-2 tw-rounded-md tw-md:tw-w-fit tw-text-2xl tw-no-underline text-center" >Submit </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
