import Typewriter from "typewriter-effect";

export default function Jumbotron({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="mx-auto flex md:flex-row flex-col-reverse	 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:text-left md:mt-0 mt-6 text-center my-auto">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <div className="block text-indigo-600 xl:inline text-lightViolet">
              Hello friend!,
              <span className="animate-wave">👋🏻</span>
            </div>
            <div
              className="block text-lightViolet xl:inline"
              style={{ display: "block" }}
            >
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
