import React from "react";

const Imp = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 text-center ">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Why detect with <span className="text-[#0097F6]">MediScan?</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-24">
        You have more important things to focus on. Let us help you take the
        worry out of early cancer detection and monitoring.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-72 ">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center   py-12 ">
          <div className="p-4 rounded-full mb-4">
            <img
              className="h-36"
              src="https://home.payground.com/wp-content/uploads/2021/12/PayGround-Microsite-Illustration-01-Save-Time.svg"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Save time.</h3>
          <p className="text-gray-600 mt-2">
            Get screened quickly and easily—no long appointments or waiting
            rooms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center py-12">
          <div className="p-4 rounded-full mb-4 ">
            <img
              className="h-36"
              src="https://home.payground.com/wp-content/uploads/2021/12/PayGround-Microsite-Illustration-02-Rest-Easy.svg"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Rest easy.</h3>
          <p className="text-gray-600 mt-2">
            Access accurate detection reports from home using our simple and
            secure platform.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center py-12 ">
          <div className="p-4 rounded-full mb-4">
            <img
              className="h-36"
              src="https://home.payground.com/wp-content/uploads/2021/12/PayGround-Microsite-Illustration-03-Stress-Less.svg"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Stress less.</h3>
          <p className="text-gray-600 mt-2">
            Track your test results, history, and doctor recommendations all in
            one dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Imp;
