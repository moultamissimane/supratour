import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BusForm from "../../components/BusForm";
import PageTitle from "../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";
import { message, Table } from "antd";
import { axiosInstance } from "../../helpers/axiosInstance";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


function AdminBuses() {
  const dispatch = useDispatch();
  const [showBusForm, setShowBusForm] = React.useState(false);
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  const getBuses = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.get("/api/buses/get-all-buses", {});
      dispatch(HideLoading());
      if (response.data.success) {
        setBuses(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteBus = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/delete-bus", {
        _id: id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        getBuses();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Bus Name",
      dataIndex: "name",
    },
    {
      title: "Bus Number",
      dataIndex: "number",
    },
    {
      title: "Bus Capacity",
      dataIndex: "seats",
    },
    {
      title: "From City",
      dataIndex: "from",
    },
    {
      title: "To City",
      dataIndex: "to",
    },
    {
      title: "Date of Journey",
      dataIndex: "date",
    },
    {
      title: "Departure Time",
      dataIndex: "departureTime",
    },
    {
      title: "Arrival Time",
      dataIndex: "arrivalTime",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (actions, record) => (
        <div className="flex gap-3">
          <i
            className="ri-delete-bin-line cursor-pointer"
            onClick={() => deleteBus(record._id)}
          ></i>

          <i
            className="ri-pencil-line cursor-pointer"
            onClick={() => {
              setSelectedBus(record);
              setShowBusForm(true);
            }}
          ></i>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getBuses(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex justify-between" style={{ fontFamily: "quicksand" }}>
        <PageTitle title="Buses" />
        <button
          className="bg-transparent bg-pink-400 text-white  font-semibold hover:text-white mb-4 px-5 shadow-pink-200 shadow hover:border-transparent rounded-xl"
          onClick={() => setShowBusForm(true)}
        >
          Add Bus
        </button>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style={{ fontFamily: "quicksand" }}
        >
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-pink-500 dark:text-white">
            <tr>
              <th className="px-4 py-3">Bus Name</th>
              <th className="px-4 py-3">Bus Number</th>
              <th className="px-4 py-3">Bus Capacity</th>
              <th className="px-4 py-3">From City</th>
              <th className="px-4 py-3">To City</th>
              <th className="px-4 py-3">Date of Journey</th>
              <th className="px-4 py-3">Departure Time</th>
              <th className="px-4 py-3">Arrival Time</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr
                key={bus._id}
                className="bg-white dark:bg-gray-700 border-b border-gray-100 dark:border-gray-700"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{bus.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{bus.number}</td>
                <td className="px-4 py-3 text-xs">{bus.seats}</td>
                <td className="px-4 py-3 text-sm">{bus.from}</td>
                <td className="px-4 py-3 text-sm">{bus.to}</td>
                <td className="px-4 py-3 text-sm">{bus.date}</td>
                <td className="px-4 py-3 text-sm">{bus.departureTime}</td>
                <td className="px-4 py-3 text-sm">{bus.arrivalTime}</td>
                <td className="px-4 py-3 text-sm">{bus.price}</td>
                <td className="px-4 py-3 text-sm">{bus.status}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-3">
                    <DeleteForeverIcon
                      className="text-red-500 cursor-pointer flex justify-center"
                      onClick={() => deleteBus(bus._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showBusForm && (
        <BusForm
          showBusForm={showBusForm}
          setShowBusForm={setShowBusForm}
          type={selectedBus ? "edit" : "add"}
          selectedBus={selectedBus}
          setSelectedBus={setSelectedBus}
          getData={getBuses}
          className="rounded-xl border-2 border-pink-400"
        />
      )}
    </>
  );
}

export default AdminBuses;
