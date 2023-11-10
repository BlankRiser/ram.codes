"use client";

import { Button } from "../ui/button";

export const Inquiry = ({}) => {
  return (
    <div className="bg-red-400">
      <Button
        onClick={async () => {
          await fetch("/api/send", {
            method: "POST",
          });
        }}
      >
        SEND EMAIL
      </Button>
    </div>
  );
};
