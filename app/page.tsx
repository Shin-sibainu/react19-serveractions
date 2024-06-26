import { Suspense } from "react";
import ActionState from "./components/ActionState";
import Optimistic from "./components/Optimistic";
import ServerAction from "./components/ServerAction";
import ServerAction2 from "./components/ServerAction2";
import Use from "./components/Use";

//https://github.com/Neha/react-19-examples

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ServerAction /> */}
      {/* <ServerAction2 /> */}
      {/* <ActionState /> */}
      {/* <Optimistic /> */}
      <Suspense fallback={"Loading..."}>
        <Use />
      </Suspense>
    </main>
  );
}
