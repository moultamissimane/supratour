import { Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import { axiosInstance } from "../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BusAlertIcon from '@mui/icons-material/BusAlert';
function BookNow() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);
  const getBus = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-bus-by-id ", {
        _id: params.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setBus(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const bookNow = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/bookings/book-seat", {
        bus: bus._id,
        seats: selectedSeats,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBus(); // eslint-disable-next-line
  }, []);

  return (
    <div className="overflow-hidden m-5">
      {bus && (
        <Row className="">
          <Col lg={24} xs={24} sm={24}>
            <div className="text-2xl flex row-auto justify-between">
              <h1 className="text-start">
                {bus.name} - {bus.number}
              </h1>
              <h1 className="text-end">
                <DirectionsBusIcon className="ri-bus-2-fill" />
                {bus.from} - {bus.to}
              </h1>
            </div>
            <div className="border-[2px] border-pink-400"></div>
            <div className="text-base mx-10 flex row-auto justify-between mt-6">
              <h1 className="text-center">
                <CalendarMonthIcon className="ri-calendar-2-fill" /> Bus date{" "}
                <br />
                <span className="text-pink-400">{bus.date}</span>
              </h1>
              <h1 className="text-center">
                <QueryBuilderIcon className="ri-time-fill" /> Bus depart time{" "}
                <br />{" "}
                <span className="text-pink-400">{bus.departureTime}</span>
              </h1>
              <h1 className="text-center">
                <QueryBuilderIcon className="ri-time-fill" /> Bus arrival time{" "}
                <br /> <span className="text-pink-400">{bus.arrivalTime}</span>
              </h1>
              <h1 className="text-center">
                <PaymentsIcon className="ri-price-tag-2-fill" /> Bus price{" "}
                <br />
                <span className="text-pink-400">{bus.price}DH</span>
              </h1>
              <h1 className="text-center ">
                <EventSeatIcon className="ri-creative-commons-by-fill text-black" />{" "}
                Bus seats <br />{" "}
                <span className="text-pink-400 ">{bus.seats}</span>
              </h1>
            </div>
          </Col>
          <Col lg={8} xs={12} sm={12}>
            <div className="text-xl flex flex-col  mt-20 items-center  ">
              <h1 className="text-center">
                <EventSeatIcon className="ri-creative-commons-by-fill" /> Seats
                Left <br />{" "}
                <span className="text-pink-400 font-bold text-xl">
                  {bus.seats - bus.seatsBooked.length}
                </span>
              </h1>
              <h1 className="text-center mt-5">
                <EventSeatIcon className="ri-creative-commons-by-fill" /> Bus
                Seats Selected <br />
              </h1>
              {selectedSeats?.length !== 0 ? (
                <div className="grid grid-cols-3 gap-2 ">
                  {selectedSeats?.map((seat, idx) => (
                    <div
                      key={idx}
                      className=" bg-black text-white mt-2 px-4 font-bold text-xl rounded-md text-center"
                    >
                      {seat}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-white px-2 rounded-md bg-red-500 font-bold text-xl">
                  No seats selected
                  <BusAlertIcon  className="text-white px-1  -mt-1 ml-3"/>

                </div>
              )}
              <h1 className="text-center mt-5">
                <PaymentsIcon className="ri-money-dollar-circle-line" /> Total
                price <br />
                <span className="font-bold text-xl text-pink-500">
                  {selectedSeats.length * bus.price} DH
                </span>
              </h1>
            </div>
          </Col>
          <Col lg={16} xs={12} sm={12}>
            <div className="flex  justify-center mt-10 ">
              <SeatSelection
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                bus={bus}
                // seatsBooked={bus.seatsBooked}
              />
            </div>
          </Col>
          <Col lg={24} xs={24} sm={24}>
            <div className="flex justify-end mt-3">
              <button
                className="bg-pink-400 text-lg font-bold text-white px-10 py-2 rounded-md"
                onClick={bookNow}
              >
                Book Now
              </button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookNow;
