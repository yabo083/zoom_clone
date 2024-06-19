// @ts-nocheck
"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";
import { useToast } from "./ui/use-toast";

const LatedTime = () => {
  const { upcomingCalls } = useGetCalls();
  const getCalls = () => {
    return upcomingCalls;
  };

  const calls = getCalls();


  

  return calls.length > 0 ? (
    calls.slice(-1).map((meeting: Call) => (
      <div key={meeting.id}>
        <span>
          Upcoming Meeting at: {meeting.state?.startsAt.toLocaleTimeString()}
        </span>
      </div>
    ))
  ) : (
    <span>No Meeting</span>
  );
};

export default LatedTime;
