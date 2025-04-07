import Image from "next/image";

export default function TestimonialsSection() {
  const feedbacks = [
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "SophiAlex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-25 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            What Our Clients Say <br /> About Us
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mt-27"
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Our clients trust Appitura to deliver exceptional mobile app
            solutions that drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-55 justify-items-center">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl pt-15 pl-5 pr-5 pb-5 text-black mt-20 w-[430px]"
            >
              <p
                className="text-sm mb-6 text-left"
                style={{
                  color: "#000000CC",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  lineHeight: "110%",
                  maxWidth: "430px",
                }}
              >
                {feedback.text}
              </p>
              <hr
                style={{ border: "0.1px solid #0000004D", margin: "25px 0" }}
              />

              <div className="flex items-center ">
                <div className="mr-3">
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4
                    className="text-[18px] font-bold"
                    style={{
                      color: "#000000CC",
                      fontFamily: "Inter",
                      fontWeight: 600,
                    }}
                  >
                    {feedback.name}
                  </h4>
                  <p
                    className="text-[10px] text-gray-600"
                    style={{
                      color: "#000000CC",
                      fontFamily: "Inter",
                      fontWeight: 600,
                    }}
                  >
                    {feedback.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
