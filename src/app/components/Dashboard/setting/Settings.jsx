"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "../../globalcomponents/ThemeToggle";
import ToggleRow from "../../globalcomponents/ToggleRow";
<<<<<<< HEAD
import AuthPattern from "../../UI/AuthPattern";
=======
>>>>>>> 74c57439e9b465636f77f8addf8ebb2dd5d4c50c

export default function Settings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  return (
<<<<<<< HEAD
    <div className=" flex  bg-background text-text px-4 py-5">
      <div className="max-w-xl w-full p-6 rounded-lg shadow-md bg-white dark:bg-MaincontentBG text-text py-10">
=======
   <div className="min-h-screen bg-background text-text px-4 py-10 ">
      
      {/* ✅ Heading above the card */}
      <h1 className="text-[40px] font-semibold  mb-4 ml-auto mr-auto max-w-xl ">Settings</h1>

      {/* ✅ Card */}
       <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md bg-white dark:bg-[#1a1a1a] text-text ">
        
        {/* General Settings */}
>>>>>>> 06bf3e890449f9f172aac24da5c23e6d4d1b1e47
        <div className="flex items-center gap-3 mb-3 ">
          <Image src="/Group.svg" alt="Settings Icon" width={33} height={33} />
          <h2 className="text-[24px] font-semibold">General Settings</h2>
        </div>

        <ThemeToggle />
        <hr className="my-4 border-border" />

        {/* Notifications */}
        <div className="flex items-center gap-3 mb-3">
          <Image src="/notification.svg" alt="Bell Icon" width={33} height={33} />
          <h2 className="text-[24px] font-semibold">Notifications</h2>
        </div>
        <ToggleRow
          label="Push Notifications"
          value={pushEnabled}
          onToggle={() => setPushEnabled(!pushEnabled)}
        />
        <ToggleRow
          label="Email Notifications"
          value={emailEnabled}
          onToggle={() => setEmailEnabled(!emailEnabled)}
          className=""
        />
        <hr className="my-4 border-border" />

        {/* Support */}
        <div className="flex items-center gap-3 mb-3">
          <Image src="/Support.svg" alt="Support Icon" width={33} height={33} />
          <h2 className="text-[24px] font-semibold">Support</h2>
        </div>
        <div className="flex flex-col text-text cursor-pointer space-y-3 px-2">
          <div className="flex justify-between font-semibold ">
            <div>FAQs</div>
            <div className="">&gt;</div>
          </div>
          <div className="flex justify-between  font-semibold ">
            <div>Contact Us</div>
            <div className="">&gt;</div>
          </div>
        </div>
      </div>
      <AuthPattern/>
    </div>
    
  );
}
