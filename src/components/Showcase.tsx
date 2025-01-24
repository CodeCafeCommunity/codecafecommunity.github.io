import { Smile } from "lucide-react";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center bg-background py-20">
      <h2 className="text-xl md:text-xl lg:text-4xl mb-6 text-primary">
        Community Showcase
      </h2>
      <div className="flex flex-1 gap-1 mx-4">
        <div className="outer mx-auto border border-solid border-transparent rounded-2xl max-w-6xl p-2.5">
          <div className="inner rounded-lg py-6 px-4">
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
        <div className="outer mx-auto border border-solid border-transparent rounded-2xl max-w-6xl p-2.5">
          <div className="inner rounded-lg py-6 px-4">
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
        <div className="outer mx-auto border border-solid border-transparent rounded-2xl max-w-6xl p-2.5">
          <div className="inner rounded-lg py-6 px-4">
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
    </section>
  );
}
