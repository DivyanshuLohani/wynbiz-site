import { useRef } from "react";
import { useScroll, motion } from "motion/react";

// Define the timeline entry type
export interface TimelineEntry {
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Timeline subcomponent
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full h-[30vh]">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="hidden md:block pl-20">
                {/* <div className="text-xl text-white font-bold">{item.year}</div> */}
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full md:flex items-center justify-center">
              <div className="md:hidden mb-4">
                {/* <div className="text-lg text-white font-bold">{item.year}</div> */}
                <h3 className="text-2xl mb-2 text-left font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute md:left-8 left-8 top-0 bottom-0 overflow-hidden w-[2px] bg-zinc-800">
          <motion.div
            style={{
              scaleY: scrollYProgress,
              originY: 0,
            }}
            className="absolute inset-x-0 top-0 bottom-0 w-[2px] bg-white"
          />
        </div>
      </div>
    </div>
  );
};
