import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form className="w-full m-5">
      <p className="mb-3 text-lg font-medium "> Add Doctor</p>
      <div className="px-8 py-8  bg-white border rounded w-full mx-w-4xl mx-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={assets.upload_area}
              alt=""
            />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 text-gray-600 lg:flex-row ">
          <div className="flex flex-col w-full gap-4 lg:flex-1">
            <div className="flex flex-col flex-1 gap-1 ">
              <p>Doctor Name</p>
              <input
                className="px-3 py-2 border rounded"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Doctor Email</p>
              <input
                className="px-3 py-2 border rounded"
                type="Email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Doctor Password </p>
              <input
                className="px-3 py-2 border rounded"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Experience</p>
              <select className="px-3 py-2 border rounded" name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="10+ Year">10+ Year</option>
              </select>
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Fees </p>
              <input
                className="px-3 py-2 border rounded"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 lg:flex-1">
            <div className="flex flex-col flex-1 gap-1 ">
              <p>Speciality</p>
              <select className="px-3 py-2 border rounded">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Education </p>
              <input
                className="px-3 py-2 border rounded"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex flex-col flex-1 gap-1 ">
              <p>Address </p>
              <input
                className="px-3 py-2 border rounded"
                type="number"
                placeholder="address 1"
                required
              />
              <input
                className="px-3 py-2 border rounded"
                type="number"
                placeholder="address 2"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor </p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            type="text"
            placeholder="Write About Doctor"
            rows={5}
            required
          />
        </div>

        <button className="px-10 py-3 mt-4 text-white rounded-full bg-primary">
          Add doctor
        </button>
      </div>
    </form>
  );
};
export default AddDoctor;
