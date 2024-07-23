import Reacf from 'react'
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/textGenerateEffect";
import {MagicButton} from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full md:-left-32 h-[80vh] w-[50vw]" fill="yellow"/>
                <Spotlight className="top-10 left-full md:-left-32 h-[80vh] w-[50vw] translate-x-2/3" fill="yellow"/>
                <Spotlight className="top-10 -left-full md:left-100 h-[80vh] w-[50vw]" fill="yellow"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white"/>
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justyfi-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web with Next.JS</h2>
                    <TextGenerateEffect words="Converting concepts into Experiences" className=" text-center text-[40px] md:text-5xl lg:text-6xl"/>
                    <p className="text-center mb-4 md:tracking-wider text-sm md:text-lg lg:text-2xl">Hi! Im Radek and this is my portfolio build in Next.JS</p>
                <a href="#about" id="about">
                    <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Hero