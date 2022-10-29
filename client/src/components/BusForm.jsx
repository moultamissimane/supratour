import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import { axiosInstance } from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
// import moment from "moment";

function BusForm({
  showBusForm,
  setShowBusForm,
  type = "add",
  getData,
  selectedBus,
  setSelectedBus,
}) {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;
      if (type === "add") {
        response = await axiosInstance.post("/api/buses/add-bus", values);
      } else {
        response = await axiosInstance.put("/api/buses/update-bus", {
          ...values,
          _id: selectedBus._id,
          });

      }
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
      getData();
      setShowBusForm(false);
      setSelectedBus(null);
      dispatch(HideLoading());  
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <Modal
      width={1000}
      title={type === "add" ? "Add Bus" : "Update Bus"}
      visible={showBusForm}
      onCancel={() => {
        setSelectedBus(null);
        setShowBusForm(false)
      }}
      footer={false}
      className="rounded-lg"
    >
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedBus}>
        <Row gutter={[10, 10]}>
          <Col lg={24} xs={24}>
            <Form.Item label="Bus Name" name="name" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>  
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Bus Number" name="number" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Total Seats" name="seats" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="From" name="from" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="To" name="to" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Date" name="date" className="text-xl font-bold">
              <input
                type="date"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Departure Time" name="departureTime" className="text-xl font-bold">
              <input
                type="time"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Arrival Time" name="arrivalTime" className="text-xl font-bold">
              <input
                type="time"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Price" name="price" className="text-xl font-bold">
              <input
                type="number"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Type" name="type" className="text-xl font-bold">
              <input
                type="text"
                className="w-full border border-pink-300 p-2 rounded font-normal"
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-center">
          <button
            className="bg-transparent font-bold hover:bg-pink-500 text-pink-700 hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default BusForm;
