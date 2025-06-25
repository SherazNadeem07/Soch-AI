// src/components/globalcomponents/ToggleRow.jsx
"use client";
import { useState } from "react";

export default function ToggleRow({ label, value, onToggle }) {
  return (
    <div className="flex items-center justify-between px-2 py-3">
      <span className="text-md font-medium text-text">{label}</span>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          value ? "bg-[#007BFF]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
