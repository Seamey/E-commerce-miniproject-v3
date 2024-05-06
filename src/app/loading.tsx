import React from "react";
import {Spinner} from "@nextui-org/react";

export default function LoadingComponent () {
  return (
    <div className="flex gap-4 justify-center">
      <Spinner label="" color="default" labelColor="foreground"/>
      </div>
  )
}