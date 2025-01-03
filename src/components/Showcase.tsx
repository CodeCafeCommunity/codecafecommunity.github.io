import { Smile } from "lucide-react";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center bg-secondary py-20">
      <h2 className="text-xl md:text-xl lg:text-4xl mb-6">
        Community Showcase
      </h2>
      {/*<div className="outer">*/}
      {/*  <div className="inner">*/}
      <div className="flex flex-1">
        <div className="outer">
          <div className="inner min-h-full">
            <div className="flex-1 flex flex-col text-center px-6 py-6">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="text-accent mb-2 mr-4" />
                <h3 className="flex flex-col items-start text-secondary text-xl mb-2 font-mono">
                  Sarah Johnson
                  <span className="text-sm">Task Manager App</span>
                </h3>
              </div>
              <p className="text-secondary text-left text-md max-w-full">
                A sleek, intuitive task management application built with React
                and Node.js.
              </p>
            </div>
          </div>
        </div>
        {/*<div className="self-center bg-[rgba(255,255,255,0.1)] bg-clip-border bg-origin-padding bg-scroll bg-repeat shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] box-border text-white font-sans font-[cv05_ss01_ss03_zero] text-base leading-6 h-[100px] w-[1px] text-left hidden lg:block"></div>*/}
        <div className="outer">
          <div className="inner min-h-full">
            <div className="flex-1 flex flex-col text-center px-6 py-6">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="text-accent mb-2 mr-4" />
                <h3 className="flex flex-col items-start text-secondary text-xl mb-2 font-mono">
                  Mike Chen
                  <span className="text-sm">Weather Dashboard</span>
                </h3>
              </div>
              <p className="text-secondary text-left text-md max-w-full">
                Real-time weather information visualized beautifully using D3.js
                and OpenWeatherMap API.
              </p>
            </div>
          </div>
        </div>
        {/*<div className="self-center bg-[rgba(255,255,255,0.1)] bg-clip-border bg-origin-padding bg-scroll bg-repeat shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] box-border text-white font-sans font-[cv05_ss01_ss03_zero] text-base leading-6 h-[100px] w-[1px] text-left hidden lg:block"></div>*/}
        <div className="outer">
          <div className="inner min-h-full">
            <div className="flex-1 flex flex-col text-center px-6 py-6">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="text-accent mb-2 mr-4" />
                <h3 className="flex flex-col items-start text-secondary text-xl mb-2 font-mono">
                  Emily Rodriguez
                  <span className="text-sm">Code Snippet Library</span>
                </h3>
              </div>
              <p className="text-secondary text-left text-md max-w-full">
                A collaborative platform for developers to share and discover
                useful code snippets.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}
