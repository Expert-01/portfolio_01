import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Campus Copilot",
    desc: "Your AI-powered academic and financial assistant for students.",
    tech: ["React", "Express", "Supabase"],
    link: "#",
  },
  {
    title: "Crypto Broker",
    desc: "A secure crypto investment platform with manual admin approvals.",
    tech: ["Node.js", "PostgreSQL", "Tailwind"],
    link: "https://www.nexa-exchange.com",
  },
  {
    title: "Smart Expense Tracker",
    desc: "Track and manage your spending dynamically with custom limits.",
    tech: ["React", "Chart.js", "Supabase"],
    link: "#",
  },
  {
    title: "Timetable Reminder",
    desc: "A smart planner that syncs your timetable with reminders.",
    tech: ["Express", "React", "PostgreSQL"],
    link: "#",
  },
];

export default function ProjectsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-16 overflow-hidden bg-[#031531] text-white">
      {/* Ripple grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ripple-grid opacity-20"></div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex items-center">
        <button
          onClick={() => scroll("left")}
          className="p-3 mx-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory px-4"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[350px] bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 px-2 py-1 rounded-md border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-auto text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-3 mx-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Ripple Grid CSS */}
      <style jsx>{`
        .ripple-grid {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 122, 255, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: rippleMove 8s linear infinite;
        }
        @keyframes rippleMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-40px, -40px);
          }
        }
      `}</style>
    </section>
  );
}