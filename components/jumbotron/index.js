import Typewriter from "typewriter-effect";

export default function Jumbotron({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-left my-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <div className="block text-indigo-600 xl:inline">
              Hello friend!, <span className="animate-wave">👋🏻</span> <br />
              I'm Prashanth
            </div>
          </h1>
          <div className="text-2xl text-white font-extrabold ml-1 mt-3">
            <Typewriter
              options={{
                strings: [
                  "I am an Engineer",
                  "I am a Developer",
                  "I am a Researcher",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <img className="h-96 mx-auto" src="/heroImage.png" />
      </div>
    </div>
  );
}