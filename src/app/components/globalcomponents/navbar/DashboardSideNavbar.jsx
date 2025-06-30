import Image from "next/image"
export default function DashboardSideNavbar() {
    return(
        <>
            <div className="h-full flex flex-col items-center justify-between rounded m-5  p-6 shadow-lg">
                <div className="flex">
                    <Image src="/logosvgdarktheme.svg" alt="Support Icon" width={41} height={41} />    
                   

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