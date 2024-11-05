import { useEffect } from "react";

/* Hooks */
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/`);
  }, [router]);

  return <main></main>;
}
