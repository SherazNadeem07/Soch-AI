"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./globalcomponents/ThemeToggle";
import ToggleRow from "./globalcomponents/ToggleRow";
import AuthPattern from "@/app/components/UI/AuthPattern";

export default function Settings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  return (
    <div className=" flex  bg-background text-text px-4 py-5">
      <div className="max-w-xl w-full p-6 rounded-lg shadow-md bg-white dark:bg-MaincontentBG text-text py-10">
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
