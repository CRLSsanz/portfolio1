import React from "react";
import { useAppContext } from "../context/AppProvider";
import imgContact from "../images/img-social-media.png";

const Contact = () => {
  const { texts } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sending Form");
    window.location = "#section6";
  };

  return (
    <div className="w-full px-5 md:px-10">
      <h1 className="text-3xl xl:text-4xl mb-5 text-white">
        {texts.contactTitle}
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="md:pr-20 xl:pr-32 mb-5">
            <p className="text-gray-300 text-justify">{texts.contactText}</p>
          </div>

          <div className="h-60 flex flex-row ">
            <div className="Bbg-gray-800 text-cyan-500 text-sm font-semibold p-5 -ml-5 rounded-md flex flex-col justify-between Sshadow-lg shadow-black/50">
              <a
                href="tel:+51990441430"
                className="rounded-full border-2 border-cyan-500 p-2 flex flex-row items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </a>

              <a
                href="mailto:carlossandev@gmail.com"
                Subject="Interesado%20en%20el%20desarrollo%20de%20website"
                className="rounded-full border-2 border-cyan-500 p-2 flex flex-row items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>

              <a
                className="rounded-full border-2 border-cyan-500 p-2 flex flex-row items-center"
                href="https://api.whatsapp.com/send?phone=+393801836002&text=Hello, I am interested in your services."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </a>
            </div>

            <div className="text-gray-200 py-2.5 flex flex-col justify-around text-start">
              <h2>Call me</h2>
              <h2>Send an Email</h2>
              <h2>whatsapp live</h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-10">
          <p className="text-gray-400 mb-5 md:pr-10">{texts.contactForm}</p>
          <form onSubmit={handleSubmit} className="text-gray-300 fam-general">
            <input
              type="text"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent rounded-md border-2 border-gray-700 mb-3"
              placeholder="Your name"
            />
            <input
              type="number"
              className="w-full xl:w-1/2 py-2.5 px-4 focus:outline-none bg-transparent rounded-md border-2 border-gray-700 mb-3"
              placeholder="Your telephone"
            />
            <input
              type="email"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent rounded-md border-2 border-gray-700 mb-3"
              placeholder="Your email"
            />
            <textarea
              rows="3"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent rounded-md border-2 border-gray-700 mb-8"
              placeholder="your message"
            ></textarea>

            <div className="hidden Fflex justify-end">
              <button
                type="submit"
                class="inline-flex whitespace-nowrap relative items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <span class="relative px-16 py-2.5 transition-all ease-in duration-75 bg-[#1A2035] rounded-md group-hover:bg-opacity-0">
                  {texts.contactSend}
                </span>
              </button>
            </div>

            <div className="flex">
              <button
                type="submit"
                className="text-center text-sm w-full xl:w-1/2 rounded-sm font-semibold whitespace-nowrap py-3 tracking-widest text-black hover:text-white bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                ¡Enviar Mensaje!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden Fflex justify-center opacity-10 md:opacity-20 pointer-events-none -mt-44 md:-mt-36">
        <img src={imgContact} alt="" srcset="" className="w-[400px]" />
      </div>

      {/** WHATSAPP */}
      <div className="hidden bg-green-600 rounded-full p-2 fixed bottom-6 left-6 hover:opacity-80 hover:scale-95">
        <a href="https://api.whatsapp.com/send?phone=+393801836002&text=Hello, I am interested in your services.">
          <svg
            viewBox="0 0 32 32"
            width="1.8em"
            height="1.8em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                fill="#BFC8D0"
              ></path>{" "}
              <path
                d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                fill="url(#paint0_linear_87_7264)"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                fill="white"
              ></path>{" "}
              <path
                d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                fill="white"
              ></path>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_87_7264"
                  x1="26.5"
                  y1="7"
                  x2="4"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#5BD066"></stop>{" "}
                  <stop offset="1" stop-color="#27B43E"></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
