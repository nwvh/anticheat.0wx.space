"use client";
import { motion } from "framer-motion";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip
} from "@nextui-org/react";
export default function Faq() {
  const features = [
      { name: "Debug", description: "Admins can be detected. Players are able to be detected more than once. Do NOT use in production", value: true },
      { name: "Heartbeat", description: "Advanced heartbeat system that keeps cheaters from stopping the anticheat", value: true },
      { name: "txAdmin Authentication", description: "Enable support for admin checking via txAdmin", value: true },
      { name: "Custom Screenshot Module", description: "Change this if you renamed your sc-basic resource (Make sure it matches).", value: true },
      { name: "Ban ID Format", description: "1 = ABCD-1234 (DEFAULT) | 2 = #1234 (NEW)", value: true },
      { name: "3 Punish Methods", description: "(LOG/KICK/BAN) | LOG (Will only send the log) | KICK (Will only kick the player and send the log) | BAN (Will ban the player and send the log)", value: true },
      { name: "Toggle Reason", description: "You can enable/disable this if you want the players to see/not see the reason for being banned", value: true },
      { name: "Appeal Discord", description: "Set a custom Discord link players will see when being banned", value: true },
      { name: "Ping on Detect", description: "Set this to true if you want to enable discord @everyone pings on new detections", value: true },
      { name: "Screenshots", description: "Enables sending screenshots of player's screen to your webhook.", value: true },
      { name: "Admin Detections", description: "Sends a webhook if an admin gets detected", value: true },
      { name: "OCR (On Screen Detection)", description: "Once in a while the script will take screenshot from every player and search it for any suspicious words (mod menus)", value: true },
      { name: "OCR Interval", description: "In ms, how often should the anticheat check player's screen? Lower values = Faster checks = Higher lag spikes. Recommended to keep at default value (15000)", value: true },
      { name: "Hide IP in Logs", description: "Adds IP addresses into spoiler tag in discord logs", value: true },
      { name: "Limit Username Length", description: "Maximum username length player can have.", value: true },
      { name: "Anti AFK", description: "Kicks players that haven't moved in a long time (configurable)", value: true },
      { name: "Anti AFK Time", description: "In seconds, how long player needs to be afk before getting kicked", value: true },
      { name: "Resource Whitelisting", description: "Starting/Stopping these resources will have no effect on resource start/stop detections.", value: true },
      { name: "Name Blacklist", description: "Blacklisted names that players cannot use", value: true },
      { name: "Discord Requirement", description: "Player can(not) join with(out) discord identifier", value: true },
      { name: "NUI DevTools", description: "Detects NUI Devtools ingame, both through F8 and localhost:13172", value: true },
      { name: "Resource Stop", description: "Detects resource stopping - If enabled, do NOT ensure resources on live server - it will ban everyone", value: true },
      { name: "Resource Start", description: "Detects resource starting - If true, do NOT ensure resources on live server - it will ban everyone", value: true },
      { name: "Clear Ped Tasks", description: "Detects kicking other players from cars etc.", value: true },
      { name: "Give Weapons", description: "Detects giving weapons", value: true },
      { name: "Remove Weapons", description: "Detects removing weapons", value: true },
      { name: "Message Blacklist", description: "Kicks player for blacklisted words in chat", value: true },
      { name: "Anti Headshot", description: "Disables headshot one taps", value: true },
      { name: "Blacklisted Plates", description: "Detects blacklisted vehicle plates", value: true },
      { name: "Plate Changing", description: "Detects if player changes his vehicle plate (Can cause problems with vehicle shops)", value: true },
      { name: "Anti Object Attach", description: "Deletes all objects that are attached to players", value: true },
      { name: "Fast Run", description: "Detects fast run", value: true },
      { name: "Anti Teleport", description: "Detects if player is far away from his last position (teleporting)", value: true },
      { name: "Anti Overlay", description: "Detects Cheat UI overlays (mostly with cheap/free cheats)", value: true },
      { name: "Blacklisted Weapons", description: "Detects if player has weapon that's on a blacklist", value: true },
      { name: "Blacklisted Vehicle", description: "Detects if player is in blacklisted vehicle", value: true },
      { name: "Blacklisted Vehicle Spawning", description: "Detects if player spawns blacklisted vehicle", value: true },
      { name: "Anti Ped Spam", description: "Detects mass spawning of peds", value: true },
      { name: "Anti Vehicle Spam", description: "Detects mass spawning of vehicles", value: true },
      { name: "Anti Object Spam", description: "Detects mass spawning of objects", value: true },
      { name: "Anti Explosion Spam", description: "Detects mass spawning of explosions", value: true },
      { name: "Blacklisted Particles", description: "Detection of blacklisted particles", value: true },
      { name: "Blacklisted Explosions", description: "Blacklisted explosions", value: true },
      { name: "Stopping Explosions", description: "If an explosion type isn't on blacklist, it will get cancelled", value: true },
      { name: "Anti Explosion Mods", description: "Detects invisible, inaudible and damage boosted explosions", value: true },
      { name: "Blacklisted Objects", description: "Detects creation of blacklisted objects and props", value: true },
      { name: "Blacklisted Peds", description: "Detects creation or usage of blacklisted peds", value: true },
      { name: "Explosion Spam", description: "Player can only create a set amount of explosions in a specified time below before getting detected", value: true },
      { name: "Explosion Limit Interval", description: "In miliseconds. Player will get detected if he creates X explosions in X miliseconds", value: true },
      { name: "Explosion Limit", description: "Maximum explosions player can create in short time before getting detected", value: true },
      { name: "Freecam Distance", description: "How far the camera has to be from player to be detected as freecam.", value: true },
      { name: "Vehicle Spawn Speed Limit", description: "Stops spawning vehicles with large speeds (eg. Ram Player option in mod menus)", value: true },
      { name: "Teleport Distance", description: "How far player needs to be from his last location in short time to be detected", value: true },
      { name: "Anti God Mode", description: "Detects god mode", value: true },
      { name: "Anti No-Clip", description: "Detects players noclipping and/or flying", value: true },
      { name: "Anti Rapid Fire", description: "Detects abnormally fast shooting", value: true },
      { name: "Anti Taze", description: "Prevents cheaters from tazing other players", value: true },
      { name: "Anti Infinite Combat Roll", description: "Detects infinite combat roll", value: true },
      { name: "Anti Radar", description: "Detects if player has minimap without being in any vehicle", value: true },
      { name: "Anti Citizen AIs", description: "Anti citizen AIs like No Recoil, Give all weapons, Boost Damage etc.", value: true },
      { name: "Anti Mod Menus", description: "Detects LUA Menus - This is significantly faster than OCR, because it only detects the most basic menus", value: true },
      { name: "Anti FreeCam", description: "Detects FreeCam (if player's camera is too far from the player ped)", value: true },
      { name: "Anti Invisibility", description: "Anti Invisible Player", value: true },
      { name: "Anti Silent Aim", description: "Detects larger hitboxes (mods like x64a.rpf)", value: true },
      { name: "VDM", description: "Vehicles will do ZERO damage to players", value: true },
      { name: "Anti Damage Boost", description: "Detects Citizen AIs and mods for boosted damage", value: true },
      { name: "Anti Defense Boost", description: "Detects Citizen AIs and mods for boosted defense", value: true },
      { name: "Anti Infinite Stamina", description: "Detects infinite stamina mods/cheats/ais", value: true },
      { name: "Anti Super Jump", description: "Detects Super Jump cheat (VERY BASIC MIGHT NOT WORK)", value: true },
      { name: "Anti Player Blips", description: "Detects player blips cheat (See other players on map) - Disable if you're using any police blips script", value: true },
      { name: "Anti Spectate", description: "Detects if player tries to spectate other players", value: true },
      { name: "Blacklisted Triggers / Events", description: "Blacklisted events that will detect the player when triggered", value: true },
      { name: "Anti Explosive Ammo", description: "Detects explosive ammo", value: true },
      { name: "Anti Infinite Ammo", description: "Anti infinite ammo in clip", value: true },
      { name: "Anti Thermal Vision", description: "Anti Thermal Vision (Has bypass for players in helicopters)", value: true },
      { name: "Anti Night Vision", description: "Anti Night Vision", value: true },
      { name: "Anti Rainbow Vehicle", description: "Anti rainbow vehicle (Can cause problem with vehicle tuning)", value: true },
      { name: "Connecting info", description: "Prints which player is connecting with their license (Disables HARDCAP)", value: true },
      { name: "Logging - Connecting", description: "Sends a webhook containing info about the player that's connecting", value: true },
      { name: "Logging - Disconnecting", description: "Sends a webhook containing info about the player that just disconnected", value: true },
      { name: "Logging - Explosions", description: "Sends a webhook containing the player's name, identifiers and info about the explosion they created", value: true },
      { name: "Logging - Objects", description: "Sends a webhook containing the player's name, identifiers and hash of the model they just created", value: true },
      // { name: "Logging - Chat", description: "Sends a webhook containing the player's name, identifiers and chat message content they sent", value: true },
      { name: "Logging - Admin Menu", description: "Sends a webhook when an admin uses any admin menu feature", value: true },
  ]
  const adminmenu = [
    { name: "Admin Menu", description: "NUI admin menu with clean and responsive UI for your admins", value: true },
    { name: "Player List", description: "List with all connected players, their ID and two options, which you can use to either Ban them or Get a screenshot of their screen", value: true },
    { name: "Server Options", description: "Server section, containing options to Clear vehicles, peds, objects or everything at once", value: true },
    { name: "AntiCheat Options", description: "Options for the anticheat itself, currently contains only the option to Unban a player via their Ban ID", value: true },
    { name: "ESP", description: "See boxes with health and armour around nearby players", value: true },
    { name: "Skeletons", description: "Draw outlines around nearby player's bones", value: true },
    { name: "Tracers", description: "Draw lines leading to nearby players", value: false },
    { name: "Object Scanner", description: "A freecam mode that you can use to scan the object you're currently looking at, with the option to copy and see it's info", value: true },
  ]
  const sortedFeatures = [...features].sort((a, b) => a.name.localeCompare(b.name));
  const sortedAdminMenu = [...adminmenu].sort((a, b) => a.name.localeCompare(b.name));

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
          Features
        </h4>
        <p className="max-w-xl text-foreground/80 text-center">
          Do you want to know if WX AntiCheat has a specific function you"d like to use?
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
        className="max-w-full w-full rounded-md p-1"
      >
        <Table aria-label="Features" shadow="lg" width="100%" isStriped={true}>
          <TableHeader>
            <TableColumn>Feature</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {sortedFeatures.map((option, index) => (
              <TableRow key={index} className={index % 2 === 1 ? "highlighted-row" : ""}>
                <TableCell>{option.name}</TableCell>
                <TableCell>{option.description}</TableCell>
                <TableCell>
                  <Chip color={option.value ? "success" : "danger"} variant="dot">
                    {option.value ? "Working" : "Not Working"}
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
          <br/>
          <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Admin Menu Features
          </h4>
          <p className="max-w-xl text-foreground/80 text-center">
            WX AntiCheat also includes an admin menu, here are it"s features
          </p>
          <br/>
          </motion.div>
          <Table aria-label="Features" shadow="lg" width="100%" isStriped={true}>
            <TableHeader>
              <TableColumn>Feature</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {sortedAdminMenu.map((option, index) => (
                <TableRow key={index} className={index % 2 === 1 ? "highlighted-row" : ""}>
                  <TableCell>{option.name}</TableCell>
                  <TableCell>{option.description}</TableCell>
                  <TableCell>
                    <Chip color={option.value ? "success" : "danger"} variant="dot">
                      {option.value ? "Working" : "Not Working"}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </motion.div>
      </motion.div>
      <div className="absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]"></div>
    </section>
  );
  
}
