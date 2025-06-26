import Image from "next/image"
export default function DashboardSideNavbar() {
    return(
        <>
            <div className="h-full flex flex-col items-center justify-between rounded m-5 bg-background text-text p-6 shadow-lg">
                <div className="flex">
                    <Image src="/Sochlogo.svg" alt="Support Icon" width={41} height={41} />    
                    <div className="font-bold text-[36px]"><span className="text-text">Soch</span> <span className="text-red">Ai</span></div>

                </div>
                <div>
                    <div>Main menu</div>
                    <div>profile</div>
                    <div>Share</div>
                    <div>Setting</div>
                </div>
                
            </div>
        </>
    )
}