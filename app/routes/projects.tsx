import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { FlowingMenu } from "@/components/ui/flowing-menu";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const demoItems = [
  {
    link: "#mojave",
    text: "Todo AI",
    image: "https://picsum.photos/seed/picsum1/600/400",
  },
  {
    link: "#sonoma",
    text: "Sonoma",
    image: "https://picsum.photos/seed/picsum2/600/400",
  },
  {
    link: "#monterey",
    text: "Monterey",
    image: "https://picsum.photos/seed/picsum3/600/400",
  },
  {
    link: "#sequoia",
    text: "Sequoia",
    image: "https://picsum.photos/seed/picsum4/600/400",
  },
];

const FlowingMenuDemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marqueeScroll 25s linear infinite;
        }
      `}</style>

      <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gray-100 dark:bg-neutral-900 p-4 transition-colors duration-300">
        <div
          className="relative shadow-xl rounded-lg overflow-hidden"
          style={{ height: "600px", width: "100%", maxWidth: "450px" }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </>
  );
};

export { FlowingMenuDemo };

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-900 ">
        <div className="w-full max-w-4xl p-6 mb-8 text-center">
          <h1 className="text-4xl font-bold bg-neutral-900 dark:bg-white">
            My Projects
          </h1>
        </div>

        <FlowingMenuDemo />
      </div>
    </>
  );
}
