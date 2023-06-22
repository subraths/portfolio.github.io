import heroImg from "../images/home-illustration-small_wdsuej.webp";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 pt-12 text-center md:flex-row-reverse md:justify-between md:text-left md:text-xl md:items-center md:my-12 md:px-4">
      <div className="md:w-[40%] lg:w-1/2">
        <div className="w-[19rem] h-[19rem] from-sky-300 via-red-500 to-white bg-gradient-to-b rounded-full relative p-1 lg:w-[30rem] lg:h-[30rem]">
          <div className="w-full h-full bg-[#202122] rounded-full">
            <img src={heroImg} alt="heroImg" className="absolute bottom-14" />
          </div>
        </div>
      </div>
      <div className="space-y-4 md:w-[50%]">
        <h1 className="text-3xl font-bold">Hi there! I'm Subrath.</h1>

        <p>
          I'm a software engineering leader. <br />
          I like to write about Typescript, React, Node.js <br /> and Software
          Architecture.
        </p>
        <p>Read my Blog Posts.</p>
        <p>Do you like my template ?</p>
        <p>Check out the Codebase.</p>
      </div>
    </div>
  );
}
