import { useEffect, useMemo, useRef, useState } from "react";
import PixelCard from "./components/PixelCard.jsx";
import TextType from "./components/TextType.jsx";
import GradientWaves from "./components/GradientWaves.jsx";
import CursorGrid from "./components/CursorGrid.jsx";

import helloIcon from "./assets/figma/hello.png";
import portraitImage from "./assets/figma/portrait.png";
import laravelIcon from "./assets/figma/laravel.png";
import reactIcon from "./assets/figma/react.png";
import tailwindIcon from "./assets/figma/tailwind.png";
import javascriptIcon from "./assets/figma/javascript.png";
import phpIcon from "./assets/figma/php.png";
import cssIcon from "./assets/figma/css.png";
import htmlIcon from "./assets/figma/html.png";
import gitIcon from "./assets/figma/git.png";
import figmaIcon from "./assets/figma/figma.png";
import webIcon from "./assets/figma/web.png";
import designerIcon from "./assets/figma/designer.png";
import githubIcon from "./assets/figma/github.svg";
import instagramIcon from "./assets/figma/instagram.svg";
import skillSeparator from "./assets/figma/skill-separator.svg";
import timelineActive from "./assets/figma/timeline-active.svg";
import timelineActiveLight from "./assets/figma/timeline-active-light.svg";
import timelineLineActive from "./assets/figma/timeline-line-active.svg";
import timelineEmpty from "./assets/figma/timeline-empty.svg";
import timelineLineMiddle from "./assets/figma/timeline-line-middle.svg";
import timelineLineEnd from "./assets/figma/timeline-line-end.svg";
import projectWeb from "./assets/figma/project-web.png";
import projectSeoArticle from "./assets/figma/project-seo-article.png";
import projectSeoConsultant from "./assets/figma/project-seo-consultant.png";
import projectUiux from "./assets/figma/project-uiux.png";
import sectionLine from "./assets/figma/section-line.svg";
import projectDot from "./assets/figma/project-dot.svg";
import arrowUp from "./assets/figma/arrow-up.svg";

const skills = [
  { name: "Laravel", icon: laravelIcon, box: "h-[70px] w-[70px]" },
  { name: "React", icon: reactIcon, box: "h-[70px] w-[70px]" },
  { name: "Tailwind", icon: tailwindIcon, box: "h-[70px] w-[70px]" },
  { name: "Javascript", icon: javascriptIcon, box: "h-[70px] w-[70px]" },
  { name: "PHP", icon: phpIcon, box: "h-[70px] w-[70px]" },
  { name: "CSS", icon: cssIcon, box: "h-[70px] w-[70px]" },
  { name: "HTML", icon: htmlIcon, box: "h-[70px] w-[61px]" },
  { name: "Git", icon: gitIcon, box: "h-[70px] w-[70px]" },
  { name: "Figma", icon: figmaIcon, box: "h-[70px] w-[70px]" },
];

const experiences = [
  {
    title: "Web Developer Isee Digital Marketing",
    year: "2025",
    description:
      "Experienced in website development and management, from visual design and feature implementation to performance optimization. She also focuses on implementing SEO and digital marketing strategies to increase website visibility in search engines, expand audience reach, and support digital business growth.",
    dot: timelineActive,
    dotLight: timelineActiveLight,
    line: timelineLineActive,
    lineIsWhite: false,
  },
  {
    title: "UI/UX Designer",
    year: "2026",
    description:
      "Redesigned the Geoff Max website interface with a focus on improving the user experience on mobile devices. The redesign emphasizes a more responsive layout, intuitive navigation, clear information structure, and mobile-friendly interactions to make the website easier and more comfortable to use across different screen sizes.",
    dot: timelineEmpty,
    line: timelineLineMiddle,
    lineIsWhite: true,
  },
  {
    title: "SEO Consultant",
    year: "2026",
    description:
      "Improved Fullday Project’s search visibility through technical SEO optimization, keyword research, on-page content optimization, and website performance analysis. Monitored indexing, search performance, and SEO issues using Google Search Console to support sustainable organic growth.",
    dot: timelineEmpty,
    line: timelineLineEnd,
    lineIsWhite: true,
  },
];

const projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "uiux", label: "UI / UX Design" },
  { id: "seo", label: "SEO" },
];

const projects = [
  {
    id: "isee-web",
    image: projectWeb,
    category: "web",
    meta: "Web Development · Isee Digital Marketing · 2026",
    title: "Web Developer",
    tag: "Web",
    tagClass: "border-red-600 bg-[#fff2f2]",
    description:
      "Mengembangkan situs web profil perusahaan yang responsif untuk Isee Digital Marketing guna menampilkan layanan, profil bisnis, dan informasi kontak secara jelas dan profesional.",
    href: "https://iseedigitalmarketing.com/",
  },
  {
    id: "isee-seo",
    image: projectSeoArticle,
    category: "seo",
    meta: "Writing SEO articles · Isee Digital Marketing · 2026",
    title: "SEO Specialist",
    tag: "SEO",
    tagClass: "border-blue-600 bg-[#f2f2ff]",
    description:
      "Developed and optimized SEO articles for Isee Digital Marketing by conducting keyword research, creating search-engine-friendly content, and monitoring website performance through Google Search Console to improve organic visibility and search rankings.",
    href: "https://iseedigitalmarketing.com/narasumber-digital-marketing-profesional-untuk-bisnis-modern/",
  },
  {
    id: "fullday-seo",
    image: projectSeoConsultant,
    category: "seo",
    meta: "Technical SEO · Fullday Project · 2026",
    title: "SEO consultant",
    tag: "SEO",
    tagClass: "border-blue-600 bg-[#f2f2ff]",
    href: "https://fulldayproject.com/",
    description:
      "Optimized FullDay Project’s SEO through technical analysis, keyword optimization, content improvement, and performance monitoring using Google Search Console.",
  },
  {
    id: "geoffmax-uiux",
    image: projectUiux,
    category: "uiux",
    meta: "Mobile-friendly website redesign · Geoffmax · 2026",
    title: "UI/UX Designer",
    tag: "UI/UX Design",
    tagClass: "border-green-700 bg-[#f2f9f2]",
    href: "https://geoffmax-mobile.vercel.app/",
    description:
      "Redesigned the Geoffmax website for a mobile-friendly experience, improving layout, navigation, and product presentation to make browsing more intuitive and responsive across devices.",
  },
];

function SectionTitle({ children, imageUnderline = false }) {
  return (
    <div
      className={
        imageUnderline
          ? "flex flex-col items-center gap-[10px] py-[10px]"
          : "border-b-[5px] border-[#892cdc] py-[5px]"
      }
    >
      <h2 className="text-center text-[30px] font-bold leading-[1.5] text-white max-sm:text-[25px]">
        {children}
      </h2>
      {imageUnderline && (
        <img src={sectionLine} alt="" className="h-[7px] w-[109px]" />
      )}
    </div>
  );
}

function RoleCard({ icon, title, children }) {
  return (
    <PixelCard
      gap={8}
      speed={30}
      colors="#892cdc,#bc6ff1,#47b5ff"
      className="figma-card !h-[252px] !w-full !rounded-[30px] !border-[#202020] md:!w-[300px]"
    >
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-[10px] p-[20px] text-center">
        <img
          src={icon}
          alt=""
          className="theme-white-icon h-[100px] w-[100px] object-contain"
        />
        <h3 className="text-[15px] text-[#47b5ff]">{title}</h3>
        <p className="text-[15px] leading-[1.5] text-white">{children}</p>
      </div>
    </PixelCard>
  );
}

function ProjectCard({ project }) {
  const card = (
    <article className="project-card cursor-target flex h-[470px] w-full flex-col overflow-hidden rounded-[30px] border border-white bg-[#c0c0c0] text-black transition-transform duration-300 hover:-translate-y-1 xl:w-[430px]">
      <div className="h-[250px] w-full shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover ${
            project.id === "geoffmax-uiux" ? "object-[center_72%]" : "object-center"
          }`}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-[10px] overflow-hidden px-[15px] py-[10px]">
        <p className="text-[13px] leading-[1.5]">{project.meta}</p>
        <div className="flex flex-col gap-[5px]">
          <h3 className="text-[20px] font-bold leading-[1.5]">{project.title}</h3>
          <span
            className={`w-fit rounded-[10px] border p-[5px] text-[10px] leading-[1.5] ${project.tagClass}`}
          >
            {project.tag}
          </span>
          <p className="text-[15px] leading-[1.53]">{project.description}</p>
        </div>
      </div>
    </article>
  );

  return project.href ? (
    <a href={project.href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  ) : (
    card
  );
}

export default function App() {
  const headerRef = useRef(null);
  const skillScrollRef = useRef(null);
  const experienceRowsRef = useRef([]);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skill: useRef(null),
    experience: useRef(null),
    project: useRef(null),
    contact: useRef(null),
  };
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") || "dark";
  });
  const [activeNav, setActiveNav] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(-1);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`
      );
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-scroll-reveal]"));
    const reveal = (section) => section.classList.add("is-revealed");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = skillScrollRef.current;
    if (!container) return undefined;

    let animationFrame;
    let paused = false;
    container.scrollLeft = 540;
    const tick = () => {
      if (!paused) {
        container.scrollLeft += 0.55;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = window.requestAnimationFrame(tick);
    };
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume, { passive: true });
    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveExperience = () => {
      animationFrame = 0;
      const triggerPoint = window.innerHeight * 0.8;
      let nextActiveIndex = -1;

      experienceRowsRef.current.forEach((row, index) => {
        if (row && row.getBoundingClientRect().top <= triggerPoint) {
          nextActiveIndex = index;
        }
      });

      setActiveExperienceIndex((current) =>
        current === nextActiveIndex ? current : nextActiveIndex
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame !== 0) return;
      animationFrame = window.requestAnimationFrame(updateActiveExperience);
    };

    updateActiveExperience();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const scrollTo = (id) => {
    const node = sectionRefs[id]?.current;
    if (!node) return;
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const top = node.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    setActiveNav(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio Contact - ${data.get("name") || "Pengunjung"}`;
    const body = [
      `Nama: ${data.get("name") || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `No Telepon: ${data.get("phone") || "-"}`,
      "",
      "Pesan:",
      data.get("message") || "-",
    ].join("\n");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "yudhajtz@gmail.com"
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const loopedSkills = [...skills, ...skills];

  return (
    <div className="min-h-screen overflow-x-hidden bg-page text-white">
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-[#202020] bg-page"
      >
        <div className="mx-auto flex min-h-[123px] w-full max-w-[1512px] items-center justify-between gap-8 px-[50px] py-[30px] max-lg:flex-col max-lg:gap-5 max-lg:px-6 max-lg:py-5">
          <button
            type="button"
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            className="cursor-target relative h-[43px] w-[115px] shrink-0"
            aria-label={`Aktifkan tema ${theme === "dark" ? "terang" : "gelap"}`}
          >
            <span
              aria-hidden="true"
              className="absolute -left-px -top-px h-[47px] w-[117px] rounded-[8px] bg-[#a581ef]"
            />
            <span className="absolute left-0 top-0 z-10 flex h-[43px] w-[115px] items-center justify-center rounded-[8px] bg-[#15141a] px-[30px] py-[12px] font-inter text-[16px] font-bold text-[#a581ef]">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          <nav className="skill-scroll flex min-w-0 flex-1 items-center justify-end gap-[50px] overflow-x-auto max-lg:w-full max-lg:justify-start max-lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(item.id);
                }}
                aria-current={activeNav === item.id ? "page" : undefined}
                className={`cursor-target flex w-[150px] shrink-0 items-center justify-center rounded-[20px] bg-transparent p-[20px] text-center text-[15px] font-bold transition-colors max-lg:w-auto max-lg:min-w-[105px] max-lg:px-5 max-lg:py-3 ${
                  activeNav === item.id ? "text-[#bc6ff1]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1512px]">
        <section
          id="home"
          ref={sectionRefs.home}
          data-scroll-reveal
          className="home-viewport-section relative isolate flex w-full items-center gap-[50px] overflow-hidden px-[50px] py-[50px] max-lg:flex-col max-lg:px-6 max-sm:px-4"
        >
          <div aria-hidden="true" data-reveal-static className="absolute inset-0 z-0">
            <GradientWaves
              horizonColor="#892CDC"
              waveColor="#892CDC"
              crestColor="#ffffff"
              speed={0.3}
              amplitude={3}
              waveScale={0.6}
              waveRatio={1}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={0.8}
              height={5}
              fogDepth={15}
              detail="high"
              brightness={1}
              opacity={1}
              mouseInteraction
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
              className="home-gradient-waves"
            />
          </div>
          <div
            aria-hidden="true"
            data-reveal-static
            className="home-waves-overlay pointer-events-none absolute inset-0 z-[1]"
          />

          <div className="relative z-10 flex w-[678px] shrink-0 flex-col items-start gap-[10px] max-lg:w-full">
            <div className="flex items-center justify-center gap-[30px]">
              <img src={helloIcon} alt="" className="h-[33px] w-[33px] object-cover" />
              <p className="text-[15px] leading-[1.5] text-white">
                Hi, I’m <strong className="text-[#bc6ff1]">Yudha W. D.</strong>
              </p>
            </div>
            <TextType
              as="h1"
              text={["Web Developer", "UI/UX Designer"]}
              loop
              showCursor={false}
              typingSpeed={55}
              className="min-h-[60px] text-[40px] font-bold leading-[1.5] text-white max-sm:min-h-[48px] max-sm:text-[32px]"
            />
            <p className="w-full pt-[10px] text-justify text-[15px] leading-[1.53] text-white">
              I am committed to continuously learning and developing my skills in building clean,
              scalable web applications in accordance with best practices. To me, coding is about
              creating digital solutions that are useful and impactful.
            </p>
            <div className="flex items-center justify-center gap-[10px] py-[20px]">
              <span className="text-[15px]">Follow me</span>
              <div className="flex items-center gap-[10px] px-[10px]">
                <a
                  href="https://github.com/yudhawira11"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-target h-[30px] w-[30px]"
                  aria-label="GitHub"
                >
                  <img
                    src={githubIcon}
                    alt=""
                    className="theme-white-icon h-[30px] w-[30px]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/yudha9c70"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-target h-[30px] w-[30px]"
                  aria-label="Instagram"
                >
                  <img
                    src={instagramIcon}
                    alt=""
                    className="theme-white-icon h-[30px] w-[30px]"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[10px]">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="cursor-target rounded-[20px] bg-[#892cdc] px-[35px] py-[10px] text-[15px] text-white"
              >
                Hire Me
              </button>
              <a
                href="/cv.pdf"
                download
                className="cursor-target rounded-[20px] border border-[#892cdc] px-[40px] py-[8px] text-[15px] text-white"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative z-10 h-[374px] min-w-0 flex-1 bg-transparent max-lg:w-full max-lg:flex-none">
            <div className="absolute inset-0 z-10 flex items-center justify-center py-[10px]">
              <div className="relative h-[354px] w-[332px] shrink-0 overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Yudha Wira Dharma"
                  className="absolute left-0 top-0 h-[500px] w-[332px] max-w-none object-contain object-top"
                />
              </div>
              <img
                src={laravelIcon}
                alt="Laravel"
                className="hero-floating-icon hero-floating-icon--laravel absolute left-[calc(50%_-_98.5px)] top-[calc(50%_-_31.5px)] h-[31px] w-[31px] rounded-[30px] object-cover"
              />
              <img
                src={reactIcon}
                alt="React"
                className="hero-floating-icon hero-floating-icon--react absolute left-[calc(50%_+_83px)] top-[calc(50%_-_59px)] h-[28px] w-[31px] object-cover"
              />
              <img
                src={tailwindIcon}
                alt="Tailwind CSS"
                className="hero-floating-icon hero-floating-icon--tailwind absolute left-[calc(50%_-_93px)] top-[calc(50%_-_177px)] h-[44px] w-[44px] rounded-[30px] object-cover"
              />
              <img
                src={gitIcon}
                alt="Git"
                className="hero-floating-icon hero-floating-icon--git absolute left-[calc(50%_+_68px)] top-[calc(50%_-_133px)] h-[35px] w-[35px] object-cover"
              />
              <img
                src={javascriptIcon}
                alt="JavaScript"
                className="hero-floating-icon hero-floating-icon--javascript absolute left-[calc(50%_-_116px)] top-[calc(50%_-_108px)] h-[33px] w-[33px] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={sectionRefs.about}
          data-scroll-reveal
          className="flex min-h-[566px] flex-col items-center gap-[50px] px-[50px] py-[50px] max-lg:px-6 max-sm:px-4"
        >
          <SectionTitle>About Me</SectionTitle>
          <div className="flex w-full flex-col items-center gap-[30px]">
            <p className="max-w-[1123px] pt-[10px] text-justify text-[15px] leading-[1.53] text-white">
              I am Yudha Wira Dharma, a web developer and Informatics student with a strong passion
              for web development. I enjoy continuous learning, exploring new technologies, and
              honing my skills to build clean, scalable web applications that deliver excellent
              user experiences. In every project, I strive to integrate technical aspects,
              functionality, and design to create solutions that not only perform well but also
              deliver tangible impact.
            </p>
            <div className="flex w-full items-center justify-center gap-[100px] max-lg:flex-col max-lg:gap-10">
              <div className="flex w-[200px] shrink-0 flex-col items-start gap-[10px] font-bold text-white max-lg:items-center">
                <strong className="text-[100px] leading-[1.5] max-sm:text-[76px]">2 +</strong>
                <span className="text-[30px] leading-[1.5]">
                  Tahun
                  <br />
                  Pengalaman
                </span>
              </div>
              <div className="flex items-center gap-[50px] max-md:w-full max-md:flex-col max-md:gap-6">
                <RoleCard icon={webIcon} title="Web Developer">
                  Experienced in building clean, functional, and scalable web applications.
                </RoleCard>
                <RoleCard icon={designerIcon} title="UI / UX Designer">
                  Experience designing responsive UI and focusing on user experience.
                </RoleCard>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skill"
          ref={sectionRefs.skill}
          data-scroll-reveal
          className="flex min-h-[375px] flex-col items-center gap-[10px] px-[50px] py-[50px] max-lg:px-0"
        >
          <SectionTitle>Skill</SectionTitle>
          <div
            ref={skillScrollRef}
            className="skill-scroll flex w-full items-center overflow-x-auto overflow-y-hidden py-[50px]"
          >
            {loopedSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex shrink-0 items-center">
                <div className="flex min-w-[170px] flex-col items-center justify-center gap-[10px] px-[50px]">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`${skill.box} max-w-none shrink-0 object-cover`}
                  />
                  <span className="whitespace-nowrap text-center text-[20px] font-bold leading-[1.5] text-white">
                    {skill.name}
                  </span>
                </div>
                {index < loopedSkills.length - 1 && (
                  <img
                    src={skillSeparator}
                    alt=""
                    className="theme-white-icon h-[100px] w-[100px] shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          ref={sectionRefs.experience}
          data-scroll-reveal
          className="relative isolate flex min-h-[702px] flex-col items-center gap-[50px] overflow-hidden px-[50px] py-[50px] max-lg:px-6 max-sm:px-4"
        >
          <div
            aria-hidden="true"
            data-reveal-static
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <CursorGrid
              cellSize={50}
              color={theme === "light" ? "#7C3AED" : "#892CDC"}
              radius={100}
              falloff="smooth"
              holdTime={350}
              fadeDuration={600}
              lineWidth={1.5}
              maxOpacity={1}
              fillOpacity={0}
              gridOpacity={0}
              cellRadius={0}
              clickPulse
              pulseSpeed={600}
            />
          </div>

          <div className="relative z-10">
            <SectionTitle>Experience</SectionTitle>
          </div>
          <div className="relative z-10 flex w-full max-w-[980px] flex-col items-start">
            {experiences.map((experience, index) => {
              const isActive = index <= activeExperienceIndex;
              const activeDot = theme === "light" ? timelineActiveLight : timelineActive;
              const inactiveLine =
                index === experiences.length - 1 ? timelineLineEnd : timelineLineMiddle;

              return (
                <div
                  key={experience.title}
                  ref={(node) => {
                    experienceRowsRef.current[index] = node;
                  }}
                  className="flex w-full items-stretch gap-[50px] max-sm:gap-5"
                >
                  <div className="flex w-[30px] shrink-0 flex-col items-center">
                    <div className="relative h-[30px] w-[30px] shrink-0">
                      <img
                        src={timelineEmpty}
                        alt=""
                        className={`theme-white-icon absolute inset-0 h-[30px] w-[30px] transition-opacity duration-1000 ${
                          isActive ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <img
                        src={activeDot}
                        alt=""
                        className={`absolute inset-0 h-[30px] w-[30px] transition-opacity duration-1000 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                    <div className="relative min-h-[90px] w-px flex-1">
                      <img
                        src={inactiveLine}
                        alt=""
                        className={`theme-white-icon absolute inset-0 h-full w-px transition-opacity delay-[1000ms] duration-700 ${
                          isActive ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <img
                        src={timelineLineActive}
                        alt=""
                        className={`absolute inset-0 h-full w-px transition-opacity delay-[1000ms] duration-700 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="w-[800px] max-w-full pb-[10px] pt-[10px] text-white">
                    <h3 className="text-[19px] font-semibold leading-[1.5]">
                      {experience.title}
                    </h3>
                    <p className="mt-[10px] text-[13px] leading-[1.5]">{experience.year}</p>
                    <p className="mt-[10px] text-justify text-[15px] leading-[1.53]">
                      {experience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="project"
          ref={sectionRefs.project}
          data-scroll-reveal
          className="flex min-h-[1245px] flex-col items-center gap-[10px] px-[50px] py-[50px] max-lg:px-6 max-sm:px-4"
        >
          <SectionTitle imageUnderline>Project</SectionTitle>
          <div className="flex w-full flex-wrap items-center gap-[25px] py-[15px]">
            {projectFilters.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`project-filter-button cursor-target flex items-center gap-[15px] rounded-md border px-2 py-1 text-[20px] font-bold transition-all duration-300 ${
                    active ? "project-filter-button--active" : "border-transparent"
                  }`}
                  aria-pressed={active}
                  aria-controls="project-grid"
                >
                  <span className="relative h-[10px] w-[10px] shrink-0" aria-hidden="true">
                    <img
                      src={projectDot}
                      alt=""
                      className={`theme-white-icon absolute inset-0 h-[10px] w-[10px] transition-all duration-300 ${
                        active ? "scale-75 opacity-0" : "scale-100 opacity-100"
                      }`}
                    />
                    <span
                      className={`project-filter-active-dot absolute inset-0 rounded-full transition-all duration-300 ${
                        active ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    />
                  </span>
                  {filter.label}
                </button>
              );
            })}
          </div>
          <div
            key={activeFilter}
            id="project-grid"
            className="project-filter-results grid w-full grid-cols-1 items-start gap-[50px] md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          ref={sectionRefs.contact}
          data-scroll-reveal
          className="flex min-h-[955px] flex-col items-center gap-[30px] py-[50px] max-lg:px-6 max-sm:px-4"
        >
          <SectionTitle imageUnderline>Contact</SectionTitle>
          <form
            onSubmit={handleContactSubmit}
            className="figma-card flex h-[750px] w-full max-w-[1148px] flex-col justify-center gap-[35px] overflow-hidden rounded-[20px] border border-[#696969] p-[20px] transition-colors duration-200 focus-within:border-[#892cdc] max-md:h-auto max-md:py-10"
          >
            <div className="grid grid-cols-2 gap-[50px] max-md:grid-cols-1 max-md:gap-[35px]">
              <label className="flex flex-col gap-[10px] text-[15px] font-bold">
                Nama
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  className="figma-input h-[52px] rounded-[10px] border border-[#696969] p-[15px] text-[13px] font-normal text-white outline-none transition-colors duration-200 placeholder:text-white focus:border-[#892cdc]"
                />
              </label>
              <label className="flex flex-col gap-[10px] text-[15px] font-bold">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email@gmail.com"
                  className="figma-input h-[52px] rounded-[10px] border border-[#696969] p-[15px] text-[13px] font-normal text-white outline-none transition-colors duration-200 placeholder:text-white focus:border-[#892cdc]"
                />
              </label>
            </div>
            <label className="flex flex-col gap-[10px] text-[15px] font-bold">
              No Telepom
              <input
                name="phone"
                type="tel"
                placeholder="08222XXXXXXX"
                className="figma-input h-[52px] rounded-[10px] border border-[#696969] p-[15px] text-[13px] font-normal text-white outline-none transition-colors duration-200 placeholder:text-white focus:border-[#892cdc]"
              />
            </label>
            <label className="flex flex-col gap-[10px] text-[15px] font-bold">
              Pesan
              <textarea
                name="message"
                required
                placeholder="Tulis Pesan Kamu..."
                className="figma-input h-[172px] resize-none rounded-[10px] border border-[#696969] p-[15px] text-[13px] font-normal text-white outline-none transition-colors duration-200 placeholder:text-white focus:border-[#892cdc]"
              />
            </label>
            <button
              type="submit"
              className="cursor-target w-full rounded-[30px] bg-[#892cdc] px-[10px] py-[15px] text-[20px] font-semibold text-white transition hover:bg-[#9c3ee7]"
            >
              Kirim Pesan
            </button>
            <p className="text-center text-[20px] leading-[1.5] text-white max-sm:text-[15px]">
              Setelah submit, kamu akan diarahkan ke email untuk mengirim pesan.
            </p>
          </form>
        </section>
      </main>

      <footer className="mx-auto flex min-h-[130px] w-full max-w-[1512px] items-center justify-center px-4 py-[50px]">
        <p className="text-center text-[20px] font-semibold leading-[1.5] text-white max-sm:text-[14px]">
          © 2026 Yudha Wira Dharma. All rights reserved
        </p>
      </footer>

      <button
        type="button"
        onClick={() => scrollTo("home")}
        className="cursor-target fixed bottom-[38px] right-[69px] z-40 flex h-[70px] items-center justify-center gap-[8px] rounded-[25px] bg-[#892cdc] p-[20px] text-[20px] font-bold text-[#fff] shadow-lg max-sm:bottom-5 max-sm:right-5 max-sm:h-[56px] max-sm:p-3 max-sm:text-[16px]"
        aria-label="Kembali ke atas"
      >
        <span className="flex h-[30px] w-[30px] items-center justify-center">
          <img src={arrowUp} alt="" className="h-[18px] w-[15px]" />
        </span>
        Top
      </button>
    </div>
  );
}
