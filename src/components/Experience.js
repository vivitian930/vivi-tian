import { motion, useScroll } from "framer-motion"
import React, { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul
          className="w-full flex flex-col items-start justify-between ml-4
          xs:ml-2
          "
        >
          <Details
            position="Cloud & DevOps Engineer"
            company="Self-Employed"
            time="2021-Present"
            companyLink="/"
            address="Auckland, New Zealand"
            work="Worked on a team responsible for design and deliver fully automated Azure Landing Zones for clients. Contributed to automating Azure DevOps projects, repositories, subscriptions, and workspaces using Terraform, ARM Template, PowerShell, Bash, and Python. Used Azure Repos, Azure Pipelines, service connections, and Azure Cloud for subscription management."
          />
          <Details
            position="Software & DevOps Engineer"
            company="Self-Employed"
            time="2020-Present"
            companyLink="/"
            address="Auckland, New Zealand"
            work="Self-trained Architect and Engineering skills with professional guidance. Worked on distrabuted web applications and integration systems.
            Recent contribution includes a Customized ChatGPT, AI Art Generation Integration/Automation to fully automate Midjourney image generation. "
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
