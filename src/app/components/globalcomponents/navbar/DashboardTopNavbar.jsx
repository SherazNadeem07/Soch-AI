'use client'
import Image from "next/image";

export default function DashboardTopNavbar({ title, name, username, avatarUrl }) {
  return (
    <div className=" flex justify-between items-center w-full  py-4 border-b  ">

      <h2 className="text-[40px] font-semibold ">{title}</h2>


      <div className="flex items-center space-x-4">
       
        <div className="w-9 h-9 bg-bgBell rounded-full flex items-center justify-center">
          <Image src="/bell.svg" alt="Notification" width={20} height={20} />
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/user.svg"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium ">{name}</span>
            <span className="text-xs text-mailText">{username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
