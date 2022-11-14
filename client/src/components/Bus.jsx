import React from "react";
import { useNavigate } from "react-router-dom";

function Bus({ bus }) {
  const navigate = useNavigate();
  return (
    <div className="p-3 m-2 rounded-md border-[1px] text-white border-[#174C4F] bg-black hover:shadow-2xl duration-300">
      <h1 className="text-xl text-white font-semibold">{bus.name}</h1>
      <div className="border-[2px] border-[#174C4F]"></div>
      <div className="flex justify-between p-2">
        <div>
          <p className="text-base font-semibold">From</p>
          <p className="text-base">{bus.from}</p>
        </div>

        <div>
          <p className="text-base font-semibold">To</p>
          <p className="text-base">{bus.to}</p>
        </div>

        <div>
          <p className="text-base font-semibold">Price</p>
          <p className="text-base">DH {bus.price} </p>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <p className="text-base font-semibold">Journey Date</p>
          <p className="text-base">{bus.date}</p>
        </div>

        <div>
            <p className="text-base font-semibold">Departure Time</p>
            <p className="text-base">{bus.departureTime}</p>
        </div>

        <div>
            <p className="text-base font-semibold">Arrival Time</p>
            <p className="text-base">{bus.arrivalTime}</p>
        </div>

       
      </div>
        <div className="flex justify-center">
            <button
                className="bg-[#174C4F] hover:bg-[#022e30] text-white text-lg font-semibold py-2 px-4 rounded"
                onClick={() => navigate(`/book-now/${bus._id}`)}
            >
                Book Now
            </button>
        </div>
    </div>
  );
}

export default Bus;