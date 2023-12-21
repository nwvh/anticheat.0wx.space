import { Divider } from "@nextui-org/divider";
import { SiDiscord, SiFivem } from "react-icons/si";
import { Github, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider />
        <div className="flex justify-between items-center py-10">
          <p className="flex font-light">
<b>WX AntiCheat</b>, created & developed by WX
          </p>
          <div className="px-5 py-2 flex gap-5">
          <div className="text-tiny"><Github size={20} className="inline-block mr-1" /><a href="https://github.com/nwvh" style={{color:"#9B7EDE"}}>GitHub</a></div>
          <div className="text-tiny"><SiFivem size={18} className="inline-block mr-1" /><a href="https://forum.cfx.re/u/0wx" style={{color:"#9B7EDE"}}>CFX.re Forum</a></div>
          <div className="text-tiny"><SiDiscord size={18} className="inline-block mr-1" />@00wx</div>
        </div>
        </div>
      </div>
    </footer>
  );
}

