"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LuShoppingCart } from "react-icons/lu";
import { FaLock, FaLockOpen  } from "react-icons/fa";


export default function Pricing() {
  const plans = [

    {
      name: (
        <>
          <FaLockOpen className="inline-block mr-2"/> Open Source Version
        </>
      ),
      desc: "For experienced server owners",
      price: 69.99,
      isMostPop: false,
      features: [
        "All features",
        "Free Support",
        "Full source code",
        "Keymaster Asset",
        "Customer role on Discord",
      ],
    },
    {
      name: (
        <>
          <FaLock className="inline-block mr-2"/> Escrowed Version
        </>
      ),
      desc: "Best choice for everyone",
      price: 19.99,
      isMostPop: true,
      features: [
        "All features",
        "Free Support",
        "Keymaster Asset",
        "Customer role on Discord",
      ],
    },
  ];

  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-28 gap-15 md:px-8 flex justify-center items-center">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 md:px-8"
      >
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Pricing for WX AntiCheat
          </h3>
          <div className="mt-3 max-w-xl text-foreground/80">
            <p>Select the version that suits your server the best.</p>
          </div>
        </div>
        <div className="mt-16 gap-10 flex lg:grid-cols-3 place-content-center">
          {plans.map((item, idx) => (
            <Card
              key={idx}
              className={
                item.isMostPop ? "border-2 border-primary sm:scale-110" : ""
              }
            >
              <CardHeader>
                <span className="font-medium">{item.name}</span>
              </CardHeader>
              <Divider />
              <CardBody className="gap-3">
                <div className="text-3xl font-semibold">
                  ${item.price} <span className="text-xl font-normal"></span>
                </div>
                <p>{item.desc}</p>
                <ul className="p-8 space-y-3">
                  <li className="font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <Check size={20} />
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  className="w-full"
                  variant="solid"
                  href="https://0wx.tebex.io"
                  color={item.isMostPop ? "primary" : "default"}
                >
                  <LuShoppingCart />
Purchase
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
