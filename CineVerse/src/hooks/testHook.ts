import axios from "axios";
import React from "react";

export const testHook = () => {
  const getEvents = async () => {
    const res = await axios.get("http://localhost:3900/api/event/getEvents/");
    return res;
  };
  console.log(getEvents());
};
