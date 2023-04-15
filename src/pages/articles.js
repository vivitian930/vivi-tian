import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"
import { motion, useMotionValue } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useRef } from "react"
import article1 from "../../public/images/articles/create loading screen in react js.jpg"

const FramerImage = motion(Image)

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block"
    x.set(e.pageX)
    y.set(-10)
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline md:text-lg">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const FeaturedArticle = ({ time, title, summary, img, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
    dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-xl"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768) 100vw,
              (max-width: 1200) 50vw,
              50vw
              "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 capitalize  text-2xl font-bold hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  )
}

const Article = ({ title, date, img, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
    dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    "
    >
      <MovingImage title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 dark:text-primaryDark
      sm:self-start sm:pl-0 xs:text-sm
      "
      >
        {date}
      </span>
    </motion.li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Vivi Tian | Articles Page</title>
        <meta name="description" content="Vivi Tian, Github: vivitian930." />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={article1}
              link="/"
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              img={article1}
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="Oct 7, 2022"
              img={article1}
              link="/"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="Oct 7, 2022"
              img={article1}
              link="/"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="Oct 7, 2022"
              img={article1}
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
