import React from "react";
// import bgLandingPage from "../assets/bg-landingpage.jpg";
import Header from "../components/Header";
import StarIcon from "@mui/icons-material/Star";

const LandingPage = () => {
  const Testimonails = [
    {
      name: "John Doe",
      title: "CEO of Supratours",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
    {
      name: "John Doe",
      title: "Product Manager of Supratours",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
    {
      name: "John Doe",
      title: "Client of Supratours",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
    {
      name: "John Doe",
      title: "Co-Founder of CTM",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
    {
      name: "John Doe",
      title: "CEO of Markoub",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
    {
      name: "John Doe",
      title: "Client of Supratours",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image:
        "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rate: <StarIcon />,
    },
  ];

  return (
    <div
      className=" "
      style={{
        fontFamily: "Poppins",
      }}
    >
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold text-[#17816d] tracking-tight sm:text-5xl">
              Read trusted reviews from our customers
            </h2>
            <p className="text-gray-500 mx-auto mt-4 text-base max-w-lg">
              Our customers love us and we love them too !
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            {Testimonails.map((testimonial, idx) => (
              <div key={idx}>
                <img
                  alt="Woman"
                  src={testimonial.image}
                  className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                />
                <blockquote className="-mt-6 bg-gray-200 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                  <p className="text-lg font-bold text-gray-700">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    {testimonial.title}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    {testimonial.comment}
                  </p>
                  <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                    {testimonial.rate}
                    {testimonial.rate}
                    {testimonial.rate}
                    {testimonial.rate}
                    {testimonial.rate}
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
