import Typewriter from "typewriter-effect";

export default function Jumbotron({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="mx-auto flex md:flex-row flex-col-reverse	 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:text-left md:mt-0 mt-6 text-center my-auto">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <div className="block xl:inline font-extralight">
              Hello friend!,
              <span className="animate-wave">👋🏻</span>
            </div>
            <div
              className="block font-extralight xl:inline"
              style={{ display: "block" }}
            >
              I'm Prashanth
            </div>
          </h1>
          <div
            className="text-2xl font-extrabold ml-1 mt-3"
            style={{ color: "#E03690" }}
          >
            <Typewriter
              options={{
                strings: [
                  "I am an Engineer",
                  "I am a Developer",
                  "I am a Researcher",
                  "I am a bibliophile",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <img
          className="h-96 mx-auto"
          src="/heroImage.png"
          style={{
            maxWidth: "100%",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
