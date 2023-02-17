import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export function MotionSection({ children }: Props) {
  return <motion.section>{children}</motion.section>;
}
