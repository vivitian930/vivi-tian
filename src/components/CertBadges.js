import React from "react"
import {
  AdminNoBg,
  AmbientNoBg,
  IstioNoBg,
  NetworkNoBg,
  SolutionNoBg
} from "./icons"

const CertBadges = () => {
  return (
    <>
      <div
        className="absolute right-4 bottom-4
flex items-center justify-center overflow-hidden md:relative md:pt-2 md:bottom-auto

"
      >
        <div className="w-32 h-auto flex items-center justify-center relative md:w-24">
          <SolutionNoBg className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24">
          <SolutionNoBg className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24">
          <IstioNoBg className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24">
          <AmbientNoBg className="" />
        </div>

        <div className="w-32 h-auto flex items-center justify-center relative md:w-24">
          <NetworkNoBg className="" />
        </div>
      </div>
    </>
  )
}

export default CertBadges
