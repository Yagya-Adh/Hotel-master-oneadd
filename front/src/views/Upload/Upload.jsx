import React, { useState } from "react";
import axiosClient from "../../axiosClient";
// import { BeakerIcon } from "@heroicons/react/24/solid";

import Swal from "sweetalert2";

import { FaBeer } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";

export default function Upload() {
  const [image, setImage] = useState("");

  const handleChnage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleApi = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", image);
    axiosClient.post("...", formdata).then((res) => {
      // console.log(res);
    });

    /* sweet- alert 2 */

    /* icons list:  
        success, warning, info,
        error, question
    */
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div>
      <form onSubmit={handleApi} enctype="multipart/form-data">
        <div className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer ">
          <label
            htmlFor="sendImg"
            className="text-center flex-col justify-center"
          >
            <BsCloudUpload className="h-32 w-32 text-blue-500 hover:text-blue-600" />
            <input
              className="hidden"
              onChange={handleChnage}
              type="file"
              name="file"
              id="sendImg"
            />
          </label>
          <span className="">Choose some files to upload</span>
        </div>
        <button className="bg-purple-700 hover:bg-purple-500 hover:text-white p-2 text-xl">
          Save
        </button>
      </form>
    </div>
  );
}
