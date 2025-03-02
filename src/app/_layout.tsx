import { SessionProvider } from "@/contexts/SessionProvider";
import "../global.css";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}
