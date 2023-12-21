"use client";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 2.5 }}
            className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-extrabold mx-auto md:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
              The only{" "}
              <span className="bg-gradient-to-t from-primary to-white-500 text-transparent bg-clip-text border-none">
                AntiCheat
              </span>{" "}
              you'll ever need
            </h1>
            <p className="max-w-2xl mx-auto text-foreground/80">
              Most affordable, functional anticheat for your FiveM server
            </p>
            <div className="flex gap-5">
              <Chip
                variant="dot"
                color="success"
              >
                200+ Satisfied Customers
              </Chip>
            </div>
            <div className="items-center justify-center gap-4 space-y-3 sm:flex sm:space-y-0">
              <motion.div whileHover={{ scale: 1.05 }}>
              <div className="flex flex-wrap gap-4 items-center">
                <Button color="primary" variant="solid">
                  <a href="https://docs.0wx.space">Docs</a>
                </Button>
                <Button color="primary" variant="solid">
                  <a href="https://0wx.tebex.io">Purchase WX AntiCheat</a>
                </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center -z-10 "
      >
<div className="w-3/4 flex justify-center items-center">
          <div className="w-[100px] h-[600px] bg-light blur-[120px] rounded-3xl max-sm:rotate-[20deg] sm:rotate-[35deg] bg-primary"></div>
        </div>
      </motion.div>
    </div>
  );
}
