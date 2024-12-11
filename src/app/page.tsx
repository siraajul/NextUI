"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";

const HomePage = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" justify-start items-center ">
        <Button className="" color="primary">
          Button
        </Button>
      </div>
      <div className=" bg-slate-600 ">
        <Calendar
          isReadOnly
          aria-label="Date (Read Only)"
          value={today(getLocalTimeZone())}
        />
      </div>
    </div>
  );
};

export default HomePage;
