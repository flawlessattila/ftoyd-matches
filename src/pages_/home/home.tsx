"use client";
import React from "react";
import { ControlPanel } from "./ui/control-panel/control-panel";
import { Matches } from "./ui/matches/matches";

const HomePage = () => {
  return (
    <>
      <ControlPanel />
      <Matches />
    </>
  );
};

export { HomePage };
