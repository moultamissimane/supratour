import { Card, Col, Row } from "antd";
import React from "react";

function SeatSelection({ selectedSeats, setSelectedSeats, bus }) {
  const capacity = bus.seats;
  const selectOrUnselectSeats = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div>
      <div className="border-none w-full ">
        <Card>
          <Row
          className="rounded-md border p-3 border-pink-500"
          gutter={[0, 8]}>
            {Array.from(Array(capacity).keys()).map((seat) => {
              let seatClass = ``;
              selectedSeats.includes(seat + 1);
              if (selectedSeats.includes(seat + 1)) {
                seatClass = `bg-pink-500 border-[1px] font-bold rounded-md border-pink-500 text-center text-black text-base p-1 cursor-pointer w-10 h-10`;
              } else if (bus.seatsBooked.includes(seat + 1)) {
                seatClass = ` bg-gray-500 border-[1px] border-gray-500 rounded-md text-center font-bold text-black text-base p-1 pointer-events-none cursor-not-allowed w-10 h-10`;

                // seatClass = `bg-black border-[2px] border-black text-center text-white text-base font-mono p-1 cursor-pointer w-10 h-10 rounded-tl-3xl rounded-br-3xl `;
              }
              return (
                <Col span={3}>
                  <div className="flex gap-2 justify-center">
                    <div className="border-[1px] border-gray-500 cursor-pointer rounded-md text-center font-bold text-black text-base  p-1  w-10 h-10  ">
                      <div
                        className={`seat ${seatClass}`}
                        onClick={() => selectOrUnselectSeats(seat + 1)}
                      >
                        {seat + 1}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default SeatSelection;
