export default function AuthPattern({ className }) {
  return (
    <div className={`bg-primary text-white mx-4 p-6 my-6  w-[75%] md:w-[65%] h-fit hidden sm:flex flex-col justify-center rounded-2xl object-contain ${className}`}>
      <img src="/icons/patternAuth.svg" className="w-full h-auto object-fill" alt="Auth Pattern" />
      <div className="mx-4 mt-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Where AI Meets</h1>
          <h1 className="text-xl md:text-2xl font-semibold">Local Knowledge</h1>
        </div>
        <div className="flex text-xs  md:text-sm mt-4 mx-0">
          <p>Genius say Jugaar tak - </p>
          <span className="font-semibold ml-1">Smarter Together</span>
        </div>
      </div>
    </div>
  );
}
