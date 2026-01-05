// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function LocationProvider({ children }) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence>
//       <motion.div
//         key={pathname}
//         initial={{ y: "", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
