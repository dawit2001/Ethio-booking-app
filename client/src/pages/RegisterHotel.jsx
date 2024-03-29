import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const RegisterHotelApi = async (formData, imageUrl) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/hotel/new`,
    {
      ...formData,
      imageUrl,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    }
  );
  console.log(await response.data);
  return response.data;
};

const RegisterHotel = () => {
  const [uploadProgress, setUploadProgress] = useState(null);
  const [formData, setFormData] = useState({
    name: null,
    description: null,
    type: "appartment",
    rating: 0,
    country: null,
    city: null,
    streetAddress: null,
    webSite: null,
  });
  const mutation = useMutation({
    mutationKey: ["RegisterHotel"],
    mutationFn: ({ formData, imageUrl }) =>
      RegisterHotelApi(formData, imageUrl),
    onSuccess: (data) => console.log(data),
  });
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const uploadImage = async (e) => {
    const image = e.target.files[0];
    if (!image) return;
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/hotel/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progress) => {
            const percentage = Math.round(
              (progress.loaded / progress.total) * 100
            );
            setUploadProgress(percentage);
          },
        }
      );
      const data = await response.data;
      setImageUrl(data.url);
      setUploadProgress(null);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name);
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.description ||
      !formData.type ||
      !formData.country ||
      !formData.city ||
      !formData.streetAddress
    ) {
      setError("incorret input please check your input!!!!!");
      console.log("coldest moment");
      return;
    }
    mutation.mutate({ formData, imageUrl });
  };
  console.log(uploadProgress);

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full h-full justify-center align-middle p-10"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="hotel_name">
            Hotel name{" "}
            <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <input
            type="text"
            id="hotel_name"
            name="name"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hotel_desc">
            Hotel Description{" "}
            <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <textarea
            type="text"
            id="hotel_desc"
            name="description"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type">
            Type <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <select
            type="text"
            id="type"
            name="type"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          >
            <option value="appartment">Appartment</option>
            <option value="luxuary homes">Luxuary homes</option>
            <option value="hotel">Hotel</option>
            <option value="guest house">Guest house</option>
            <option value="villa">Villa</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rating">rating</label>
          <select
            type="text"
            id="rating"
            name="rating"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          >
            <option value="0">N/A</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hotel_name">
            country{" "}
            <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hotel_name">
            city <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>{" "}
        <div className="flex flex-col gap-2">
          <label htmlFor="street_address">
            street Address{" "}
            <span className="text-red-600 text-sm font-semibold">*</span>
          </label>
          <input
            type="text"
            id="street_address"
            name="streetAddress"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>{" "}
        <div className="flex flex-col gap-2">
          <label htmlFor="webSite">web address</label>
          <input
            type="url"
            id="webSite"
            name="webSite"
            onChange={handleChange}
            className="border w-1/2 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2 relative">
          <label
            htmlFor="hotel_img"
            className="p-10 flex gap-5 md:border-dashed  border-2 rounded-2 align-middle justify-center"
          >
            <p className="text-sm text-gray-600 self-center p-2 bg-slate-200 rounded-md">
              Add image
            </p>
          </label>
          <div className="flex relative ">
            <input
              type="file"
              id="hotel_img"
              name="image"
              onChange={uploadImage}
              accept=".jpg, .jpeg, .png, .webp"
              hidden
              className="border w-1/2 outline-none p-2 rounded-md"
            />
          </div>
          {uploadProgress && (
            <div className="absolute top-1/2 left-1/2 w-[150px] flex flex-col gap-5 z-40 bg-green-600">
              <div className="w-full h-[15px] rounded-full bg-white p-[1px] border">
                <div
                  className={`w-[${uploadProgress}%] h-full bg-primary rounded-full`}
                ></div>
              </div>
              <p className="text-md font-semibold text-gray-600">
                uploading ...
              </p>
            </div>
          )}
        </div>
        <button
          disabled={mutation.isPending || uploadProgress}
          className={`md:bg-primary p-3 text-white font-semibold w-1/3 rounded-md ${
            mutation.isPending || uploadProgress
              ? "cursor-not-allowed opacity-50"
              : "opacity-100"
          }`}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default RegisterHotel;
