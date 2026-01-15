import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="hidden lg:flex primary-btn items-center gap-2">
      {children}
    </button>
  );
}
