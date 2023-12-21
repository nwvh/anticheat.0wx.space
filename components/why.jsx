"use client";
import { motion } from "framer-motion";
import {Card, CardHeader, CardBody, CardFooter, Link, Image, Divider} from "@nextui-org/react";
import { RiSpeedFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaMoneyBillWaveAlt, FaClone } from "react-icons/fa";

export default function Faq() {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
          Why WX AntiCheat?
        </h4>
      </motion.div>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-5xl w-full rounded-sm p-1 flex gap-5"
      >
        <Card className="max-w-[400px] rounded-2xl">
          <CardHeader className="flex gap-3">
            <RiSpeedFill size={35} className="border-2 border-primary rounded-xl p-1"/>
            <div className="flex flex-col">
              <p className="text-xl">Optimised</p>
            </div>
          </CardHeader>
          <CardBody>
            <p>WX AntiCheat is perfectly optimised for every server and won't use more than <b>0.03</b>ms on your resmon</p>
          </CardBody>
        </Card>

        <Card className="max-w-[400px] rounded-2xl">
          <CardHeader className="flex gap-3">
            <FaMoneyBillWaveAlt size={35} className="border-2 border-primary rounded-xl p-1"/>
            <div className="flex flex-col">
              <p className="text-xl">Affordable</p>
            </div>
          </CardHeader>
          <CardBody>
            <p>WX AntiCheat is made to be affordable for everyone, you don't need to pay 100$+ for an anticheat!</p>
          </CardBody>
        </Card>
        
        <Card className="max-w-[400px] rounded-2xl">
          <CardHeader className="flex gap-3">
            <FaClone size={35} className="border-2 border-primary rounded-xl p-1"/>
            <div className="flex flex-col">
              <p className="text-xl">Standalone</p>
            </div>
          </CardHeader>
          <CardBody>
            <p>To run WX AntiCheat you don't need any specific frameworks, you can install this on any server, whether it's running on ESX, QB, OX Core, it doesn't matter!
            </p>
          </CardBody>
        </Card>

      </motion.div>
      <div className="absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]"></div>
    </section>
  );
}
