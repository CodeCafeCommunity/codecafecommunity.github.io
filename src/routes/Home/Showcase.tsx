import { Smile } from "lucide-react";

export default function Showcase() {
  return (
    <section className="flex flex-col items-center bg-background py-20">
      <h2 className="mb-6 text-xl text-primary md:text-xl lg:text-4xl">
        Community Showcase
      </h2>
      <div className="mx-4 flex flex-1 gap-1">
        <div className="outer mx-auto max-w-6xl rounded-2xl border border-solid border-transparent p-2.5">
          <div className="inner rounded-lg px-4 py-6">
            <div className="flex flex-1 flex-col px-6 py-6 text-center">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="mb-2 mr-4 text-accent" />
                <h3 className="mb-2 flex flex-col items-start font-mono text-xl text-secondary">
                  Sarah Johnson
                  <span className="text-sm">Task Manager App</span>
                </h3>
              </div>
              <p className="text-md max-w-full text-left text-secondary">
                A sleek, intuitive task management application built with React
                and Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="outer mx-auto max-w-6xl rounded-2xl border border-solid border-transparent p-2.5">
          <div className="inner rounded-lg px-4 py-6">
            <div className="flex flex-1 flex-col px-6 py-6 text-center">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="mb-2 mr-4 text-accent" />
                <h3 className="mb-2 flex flex-col items-start font-mono text-xl text-secondary">
                  Mike Chen
                  <span className="text-sm">Weather Dashboard</span>
                </h3>
              </div>
              <p className="text-md max-w-full text-left text-secondary">
                Real-time weather information visualized beautifully using D3.js
                and OpenWeatherMap API.
              </p>
            </div>
          </div>
        </div>
        <div className="outer mx-auto max-w-6xl rounded-2xl border border-solid border-transparent p-2.5">
          <div className="inner rounded-lg px-4 py-6">
            <div className="flex flex-1 flex-col px-6 py-6 text-center">
              <div className="flex flex-1 justify-start">
                <Smile size={48} className="mb-2 mr-4 text-accent" />
                <h3 className="mb-2 flex flex-col items-start font-mono text-xl text-secondary">
                  Emily Rodriguez
                  <span className="text-sm">Code Snippet Library</span>
                </h3>
              </div>
              <p className="text-md max-w-full text-left text-secondary">
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
