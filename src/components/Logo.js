import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

const MontionLink = motion(Link)

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MontionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full dark:border-light \
        border border-solid border-transparent text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#B63E96",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#58E6D9"
          ],
          transition: {
            duration: 1,
            repeat: Infinity
          }
        }}
      >
        EC
      </MontionLink>
    </div>
  )
}

export default Logo
