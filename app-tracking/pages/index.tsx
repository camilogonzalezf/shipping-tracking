import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

//
const Button = dynamic(() => import("sharedComponents/button"), {
  ssr: false,
  suspense: true,
});

export default function Home() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <main>
      <Button onClick={handleClick} />
    </main>
  );
}
