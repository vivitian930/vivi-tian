import AnimatedText from "@/components/AnimatedText"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Layout from "@/components/Layout"
import Skills from "@/components/Skills"
import TransitionEffect from "@/components/TransitionEffect"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import profilePic from "../../public/images/profile/developer-pic-2.png"

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 3000
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Vivi Tian | About Page</title>
        <meta name="description" content="Vivi Tian, Github: vivitian930." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagine, Innovate, Implement!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Vivi, an Azure Cloud and DevOps Engineer with experience
                in designing and implementing cloud-native app solutions. I have
                a strong background in DevOps/GitOps best practices, which helps
                organizations streamline their development processes and improve
                scalability.
              </p>
              <p className="my-4 font-medium">
                As an expert in Azure Cloud Architecture, I have designed and
                implemented numerous cloud-native and microservices
                architectures using technologies such as Kubernetes, and Istio.
                My solutions are highly available, scalable, and secure, and I
                make sure they meet the unique needs of each organization.
              </p>
              <p className="font-medium">
                I am a highly communicative and collaborative team player who is
                equally comfortable working independently. My areas of expertise
                include CI/CD pipelines, IaC and Terraform, networking, and
                security. Whatever challenge you are facing, whether it's
                migrating to the cloud, optimizing your existing cloud
                infrastructure, or improving your development processes, I can
                help you achieve your goals.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Vivi Tian"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768) 100vw,
              (max-width: 1200) 50vw,
              33vw
              "
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
            md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
