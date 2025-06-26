export default function AuthPattern({className}){
    return(
        <>
        <div className={`bg-[#007bff] text-white mx-8  p-10 my-8 w-150 h-180 flex flex-col justify-center rounded-2xl ${className} `}>
        <img src="/icons/patternAuth.svg" className="w-full h-[70%]"></img>
        <div className="mx-8 mt-6">
        <div>
            <h1 className="text-3xl font-bold">Where AI Meets</h1>
            <h1 className="text-xl font-semibold ">Local Knowledge</h1>
        </div>
        <div className="flex text-xs mt-6"><p>Genius say Jugaar tak - </p> <span className="font-semibold">Smarter Together</span></div>
        </div>
        </div>
        </>

    )
}