import React, { useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <div className="px-5 sm:px-20 md:px-5 lg:px-20 xl:px-32 2xl:px-56">
      <div className="md:flex md:justify-center px-14 mb-10">
        <div className="md:w-[700px] flex flex-col md:flex-row justify-evenly text-center bg-gradient-to-br from-teal-500 to-blue-500/80 rounded-tl-[80px] rounded-br-[80px] rounded-bl-2xl rounded-tr-[40px] py-10 -mt-44 shadow-md">
          <div className="mb-10">
            <h1 className="text-5xl font-numero font-thin">37</h1>
            <h4 className="italic">Projects Delivere!</h4>
          </div>
          <div className="mb-10">
            <h1 className="text-5xl font-numero font-thin">3</h1>
            <h4 className="italic">Years Experience</h4>
          </div>
          <div className="mb-10">
            <h1 className="text-5xl font-numero font-thin">{time}</h1>
            <h4 className="italic">Seconds on this site!</h4>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <a href="#section1" className="p-2  animate-bounce">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 511.74 511.74"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path>
          </svg>
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-5">
          <h1 className="text-2xl mb-5">CRLS DEV</h1>
          <p className="md:leading-loose">
            Soy un entusiasta de los nuevos retos; me apasiona crear software
            excelente buscando aprovechar mi experiencia y conocimientos.
          </p>
        </div>

        <div className="hidden Fflex justify-center">
          <a href="#section1" className="p-2  animate-bounce">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 511.74 511.74"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"></path>
            </svg>
          </a>
        </div>

        <div className="mb-5">
          <h1 className="text-2xl mb-5">Navega</h1>
          <h1 className="leading-loose">
            Home <br /> About <br /> Skills <br /> Work <br /> Contact
          </h1>
        </div>

        <div className="mb-5">
          <h1 className="text-2xl mb-5">Contact</h1>
          <h1 className="mb-5 leading-loose">
            Em carlonchosanz@gmail.com <br /> Te
            <span className="font-numero"> +51 990 441 430</span> <br /> Wh
            <span className="font-numero"> +51 990 441 430</span>
          </h1>
        </div>

        <div className="mb-5">
          <h1 className="text-2xl mb-5">Siguenos</h1>

          {/** SVG SOCIAL */}
          <div class="flex flex-wrap md:flex-col lg:flex-row JJjustify-center text-gray-300 mb-10">
            <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                </g>
              </svg>
            </div>
            <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-2 md:mb-2">
              <svg
                className="m-auto"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                </g>
              </svg>
            </div>
            {/** prueba */}
            <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-0">
              <svg
                className="m-auto"
                fill="currentColor"
                viewBox="-337 273 123.5 256"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs mb-5">
        All Rights Reserved <span className="font-numero">© 2023 </span>
      </p>
    </div>
  );
};

export default Footer;
