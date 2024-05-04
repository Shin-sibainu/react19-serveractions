import ActionState from "./components/ActionState";
import ServerAction from "./components/ServerAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ServerAction /> */}
      <ActionState />
    </main>
  );
}
