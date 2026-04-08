'use client';

import { DiscordIcon, StoreIcon } from "@/components/Icons";
import LightRays from "@/components/LightRay";
import { LogoSVG } from "@/components/LogoSVG";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className='absolute left-0 top-0 w-screen h-screen -z-1 pointer-events-none'>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#bd0a1f"
                    raysSpeed={1}
                    lightSpread={1.5}
                    rayLength={3}
                    pulsating={false}
                    fadeDistance={2.8}
                    saturation={1}
                    followMouse={false}
                    mouseInfluence={0.15}
                    noiseAmount={0.2}
                    distortion={0.0}
                />
            </div>
            <div className='w-screen min-h-screen h-full'>
                <div className="container mx-auto size-full min-h-screen">
                    <div className="min-h-screen flex items-center justify-center flex-col py-18.75 gap-12">
                        <motion.div
                            initial={{ top: -20, opacity: 0, scale: 0.8 }}
                            animate={{ top: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='size-36'
                        >
                            <LogoSVG className='size-full' />
                        </motion.div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col justify-center items-center gap-4 max-w-190">
                                <h1 className="lg:text-7xl text-5xl font-extrabold text-white text-center lg:leading-23 leading-17 transform-gpu">Setting The New Standard For FiveM</h1>
                            </div>
                            <p className="text-[#8B8B8C] text-lg font-regular leading-8.5 max-w-190 text-center">17movement is more than just FiveM Scripts. We&apos;re your partner in server building. We focus on what matters: solid code and support you can actually count on.</p>
                            <div className='mt-4 flex flex-col md:flex-row items-center gap-4 w-full md:w-fit'>
                                <Link href='https://17movement.net' className='flex items-center justify-center w-full lg:w-fit gap-4 h-15 pl-7 pr-8 bg-accent text-white rounded-lg text-sm font-bold transition duration-300 hover:bg-accent/15 hover:text-accent group'>
                                    <StoreIcon className='size-4' />
                                    <span>Visit our store</span>
                                </Link>
                                <Link href='https://discord.17movement.net' className='flex items-center justify-center w-full lg:w-fit gap-4 h-15 pl-7 pr-8 bg-white/3 text-secondary rounded-lg text-sm font-bold transition duration-300 hover:bg-white hover:text-black group'>
                                    <DiscordIcon className='size-4' />
                                    <span>Join our Discord</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
