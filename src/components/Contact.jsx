import React from "react";
import { useAppContext } from "../context/AppProvider";
import imgContact from "../images/img-social-media.png";
import LogosSVG from "./LogosSVG";

const Contact = () => {
  const { texts } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sending Form");
    window.location = "#section6";
  };

  return (
    <div className="w-full px-5 md:px-10 mb-10 overflow-hidden">
      <div className="flex justify-center items-end mb-5">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-3xl xl:text-4xl whitespace-nowrap text-white dark:text-gray-700"
        >
          {texts.contactTitle}
        </h1>
        <div className="w-full h-3 border-t border-gray-500/80 ml-3"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="md:pr-20 xl:pr-32 mb-5">
            <p className="text-gray-300 dark:text-gray-500 text-justify">
              {texts.contactText}
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <div className="Xbg-gray-800 text-white Xtext-cyan-500 font-medium py-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-y-5 Sshadow-lg shadow-black/50 mb-10">
              <div data-aos="zoom-out-up" data-aos-duration="1000" className="">
                <a
                  href="tel:+51990441430"
                  className="rounded w-44 text-white bg-gradient-to-br from-blue-500 to-green-500/70  hover:rotate-2 py-2 pl-4 flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>

                  <h4 className="Xtext-gray-200  pl-3">{texts.contactCall}</h4>
                </a>
              </div>

              <div
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                className="ml-10 sm:ml-0 md:ml-10"
              >
                <a
                  href="mailto:carlossandev@gmail.com"
                  Subject="Interesado%20en%20el%20desarrollo%20de%20website"
                  className="rounded w-44 text-white bg-gradient-to-r from-blue-500 to-green-500/70 hover:-ml-0.5 py-2 pl-4 flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <h4 className="Xtext-gray-200  pl-3">{texts.contactSend}</h4>
                </a>
              </div>

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="ml-20 sm:ml-0 md:ml-20"
              >
                <a
                  className="rounded w-44 text-white bg-gradient-to-tr from-blue-500 to-green-500/70  hover:-rotate-2 py-2 pl-4 flex flex-row items-center"
                  href="https://api.whatsapp.com/send?phone=+393801836002&text=Hello, I am interested in your services."
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="currentColor"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path d="M24,3.99805c-11.02771,0 -20,8.97229 -20,20c0,3.27532 0.86271,6.33681 2.26172,9.06641l-2.16797,7.76172c-0.50495,1.8034 1.27818,3.58644 3.08203,3.08203l7.76758,-2.16797c2.72738,1.39608 5.78439,2.25781 9.05664,2.25781c11.02771,0 20,-8.97229 20,-20c0,-11.02771 -8.97229,-20 -20,-20zM24,6.99805c9.40629,0 17,7.59371 17,17c0,9.40629 -7.59371,17 -17,17c-3.00158,0 -5.8094,-0.78052 -8.25781,-2.14453c-0.34512,-0.19235 -0.7522,-0.24078 -1.13281,-0.13477l-7.38672,2.06055l2.0625,-7.38281c0.10655,-0.38122 0.05811,-0.7891 -0.13477,-1.13477c-1.36674,-2.4502 -2.15039,-5.25915 -2.15039,-8.26367c0,-9.40629 7.59371,-17 17,-17zM17.24023,15c-0.319,0 -0.83444,0.11966 -1.27344,0.59766c-0.438,0.476 -1.67187,1.63047 -1.67187,3.98047c0,2.35 1.71022,4.61945 1.94922,4.93945c0.238,0.317 3.3032,5.29498 8.1582,7.20898c4.034,1.59 4.85447,1.27336 5.73047,1.19336c0.876,-0.078 2.82661,-1.15353 3.22461,-2.26953c0.398,-1.116 0.39825,-2.07058 0.28125,-2.26758c-0.119,-0.199 -0.43802,-0.31959 -0.91602,-0.55859c-0.477,-0.239 -2.82372,-1.39373 -3.26172,-1.55273c-0.438,-0.159 -0.75817,-0.23972 -1.07617,0.23828c-0.318,0.478 -1.23272,1.55309 -1.51172,1.87109c-0.279,0.32 -0.55716,0.36009 -1.03516,0.12109c-0.479,-0.241 -2.0158,-0.74409 -3.8418,-2.37109c-1.42,-1.265 -2.3753,-2.82864 -2.6543,-3.30664c-0.278,-0.476 -0.03002,-0.73761 0.20898,-0.97461c0.215,-0.214 0.4778,-0.55694 0.7168,-0.83594c0.237,-0.279 0.31561,-0.47692 0.47461,-0.79492c0.159,-0.317 0.07994,-0.59694 -0.03906,-0.83594c-0.119,-0.239 -1.04766,-2.60187 -1.47266,-3.54687c-0.357,-0.794 -0.73322,-0.81122 -1.07422,-0.82422c-0.278,-0.011 -0.59802,-0.01172 -0.91602,-0.01172z"></path>
                      </g>
                    </g>
                  </svg>
                  <h4 className="Xtext-gray-200  pl-3">{texts.contactLive}</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <LogosSVG />
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-10">
          <p className="text-gray-300 dark:text-gray-500 mb-5 md:pr-10">
            {texts.contactForm}
          </p>
          <form
            onSubmit={handleSubmit}
            className="text-gray-300 dark:text-gray-700 fam-general"
          >
            <input
              type="text"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent dark:bg-gray-50 rounded-sm border border-gray-500/30 mb-3"
              placeholder="Your name"
            />
            <input
              type="number"
              className="w-full xl:w-1/2 py-2.5 px-4 focus:outline-none bg-transparent dark:bg-gray-50 rounded-sm border border-gray-500/30 mb-3"
              placeholder="Your telephone"
            />
            <input
              type="email"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent dark:bg-gray-50 rounded-sm border border-gray-500/30 mb-3"
              placeholder="Your email"
            />
            <textarea
              rows="3"
              className="w-full py-2.5 px-4 focus:outline-none bg-transparent dark:bg-gray-50 rounded-sm border border-gray-500/30 mb-8"
              placeholder="Your message"
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

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex"
            >
              <button
                type="submit"
                className="text-center text-sm w-full md:w-1/2 rounded-sm whitespace-nowrap py-3 tracking-widest text-white bg-gradient-to-br from-blue-500 to-green-500/70 hover:bg-gradient-to-tl hover:to-green-500/70"
              >
                {texts.contactSendForm}
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
