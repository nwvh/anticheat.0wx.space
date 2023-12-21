"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";
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
          Frequently Asked Questions
        </h4>
        <p className="max-w-xl text-foreground/80 text-center">
          Do you have any question before or after purchasing WX AntiCheat? You can find the most asked questions here!
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl w-full rounded-md p-1"
      >
        <Accordion variant="splitted"

          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem key="1" aria-label="detections" title="Can WX AntiCheat Detect Cheat X?">
            Since cheats are rapidly evolving, WX AntiCheat cannot detect specific cheats, however, you can
            configure it to detect most used options in cheats, like protecting your server events or changing
            the object blacklist.
          </AccordionItem>
          <AccordionItem key="2" aria-label="help" title="I have an issue with WX AntiCheat!">
            If you have any issues with WX AntiCheat, don't worry, you can always contact our
            support team through our <a href="https://discord.gg/kU3CV2qn2x" style={{color:"#9B7EDE"}}>Discord Server</a>. We'll gladly
            help you and hopefully resolve your issue! You can also use our <a href="https://docs.0wx.space/anticheat/troubleshooting" style={{color:"#9B7EDE"}}>Troubleshooting section</a> on our docs
            website!
          </AccordionItem>
          <AccordionItem key="3" aria-label="lifetime" title="Why do you offer only the lifetime version?">
            We offer only the lifetime version because we are strictly against subscriptions, especially subscriptions for FiveM resources. Once you buy WX AntiCheat,
            you'll keep it <b>FOREVER</b>, no hidden tricks!
          </AccordionItem>
          <AccordionItem key="4" aria-label="refund" title="Is it possible to get a refund?">
            We offer refunds, but only in specific conditions, for example, when you purchase the anticheat and some of it's features aren't working as expected.
            However, if you purchase the Open Source version, we <b>DO NOT</b> offer refunds. The same thing applies for user errors, like badly configured config file.
            If you're allegible for a refund, please open a ticket on our <a href="https://discord.gg/kU3CV2qn2x" style={{color:"#9B7EDE"}}>Discord Server</a>. Attempting to
            chargeback or opening a PayPal dispute will automatically put you on the blacklist from our store!
          </AccordionItem>
          <AccordionItem key="5" aria-label="docs" title="Where can I find the documentation?">
            You can find the official documentation for WX AntiCheat (and other WX Scripts) on <a href="https://docs.0wx.space" style={{color:"#9B7EDE"}}>docs.0wx.space</a>
          </AccordionItem>
          <AccordionItem key="6" aria-label="updates" title="How often does WX AntiCheat receive updates?">
            We attempt to update WX AntiCheat as frequently as possible. The AntiCheat receives 3 types of updates: <br/><br/>
            <Table removeWrapper hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Update Type</TableColumn>
        <TableColumn>Desc</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Regular Update</TableCell>
          <TableCell>This is a regular update that includes the most new stuff, like new detections and bug fixes</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Small Update</TableCell>
          <TableCell>This type of updates include only small changes, mostly rewritten functions and/or detections</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Quick Fix</TableCell>
          <TableCell>This is something like Small Update, but it includes only bug fixes which were found in the latest Regular or Small update.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
          </AccordionItem>
        </Accordion>
      </motion.div>
      <div className="absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]"></div>
    </section>
  );
}
