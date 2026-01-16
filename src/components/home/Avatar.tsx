import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { motion } from "motion/react";

const UserAvatar = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <Avatar className=" w-24 h-24 mx-auto">
        <AvatarImage
          src="/avatar.jpg"
          alt="@shadcn"
          className=" border border-white"
        />
        <AvatarFallback className="border border-white text-3xl">
          KRSNA
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default UserAvatar;
