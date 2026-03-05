import { useEffect, useRef, useState } from "react";
import PixelCard from "./components/PixelCard.jsx";
import TextType from "./components/TextType.jsx";
import frame41 from "./assets/frame-41.svg";
import korsaImage from "./assets/projects/korsa remove bg 1.png";
import project11 from "./assets/projects/1 1.png";
import project12 from "./assets/projects/1 2.png";
import project13 from "./assets/projects/1 3.png";
import project11Alt from "./assets/projects/1 1 (1).png";
import project12Alt from "./assets/projects/1 2 (1).png";
import project13Alt from "./assets/projects/1 3 (1).png";
import project11Alt2 from "./assets/projects/1 1 (2).png";
import project12Alt2 from "./assets/projects/1 2 (2).png";
import project13Alt2 from "./assets/projects/1 3 (2).png";
import TargetCursor from "./components/TargetCursor.jsx";

const imgPngwingCom11 =
  "https://www.figma.com/api/mcp/asset/e2998b04-52ef-4c5e-beec-53e65a6f526b";
const imgIcon1 =
  "https://www.figma.com/api/mcp/asset/4fb95363-e65e-4037-9296-abb00599266c";
const imgReactLogo21 =
  "https://www.figma.com/api/mcp/asset/72b68839-6e0a-4a3f-9190-fef0e0fb876e";
const imgIdC111Tb5D17724662657431 =
  "https://www.figma.com/api/mcp/asset/25cfa9b1-1e9e-4971-9e14-038f5678f6c3";
const imgPngwingCom12 =
  "https://www.figma.com/api/mcp/asset/21fd5206-ce58-4112-bf2a-41b4d9e27d82";
const imgPngwingCom21 =
  "https://www.figma.com/api/mcp/asset/69724a4a-1ce4-49b5-bd8b-d7b09cfaca77";
const imgWeb =
  "https://www.figma.com/api/mcp/asset/d9b49eec-3718-4b4f-83cf-40ba1e8fa14e";
const imgDesigner =
  "https://www.figma.com/api/mcp/asset/709eabd3-966a-4287-bacf-36daa4babd75";
const imgIcon3 =
  "https://www.figma.com/api/mcp/asset/08e21182-74c3-4ffe-9258-a9be91d5b336";
const imgIdC111Tb5D17724662657432 =
  "https://www.figma.com/api/mcp/asset/f088d5ee-4b70-492f-a235-47df39418172";
const imgIdgBpeRx4Logos1 =
  "https://www.figma.com/api/mcp/asset/b9b377ac-aead-455e-9543-e61150d1f435";
const imgPngwingCom13 =
  "https://www.figma.com/api/mcp/asset/7a473bbc-84be-4880-ab89-5ee38432e5eb";
const imgVecteezyTheHtml5LogoWithTheNumber5InTheCenter663860051 =
  "https://www.figma.com/api/mcp/asset/6e54b398-85a8-4cb5-b880-3cc6c12a1619";
const imgFigma1 =
  "https://www.figma.com/api/mcp/asset/417e3659-86fe-41de-b131-a8155f6cbf77";
const imgDescendingSorting =
  "https://www.figma.com/api/mcp/asset/77209f79-e55c-4dd0-b9a9-b588197e3469";
const imgGitHub =
  "https://www.figma.com/api/mcp/asset/97025bd9-5007-4ca9-bce8-7a55ae4ea7ec";
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/29587d9b-a57c-4be7-aa0f-84a848214a87";
const imgFrame27 =
  "https://www.figma.com/api/mcp/asset/685affbb-efbb-4737-932c-e5005b24a594";

const skills = [
  { name: "Laravel", icon: imgIcon1 },
  { name: "React", icon: imgIcon3 },
  { name: "Tailwind", icon: imgIdC111Tb5D17724662657432 },
  { name: "Javascript", icon: imgPngwingCom21 },
  { name: "PHP", icon: imgIdgBpeRx4Logos1 },
  { name: "CSS", icon: imgPngwingCom13 },
  { name: "HTML", icon: imgVecteezyTheHtml5LogoWithTheNumber5InTheCenter663860051 },
  { name: "Git", icon: imgPngwingCom12 },
  { name: "Figma", icon: imgFigma1 },
];

const projectCategories = [
  { id: "web", label: "Web Dev" },
  { id: "uiux", label: "UI / UX Design" },
  { id: "seo", label: "SEO Article" },
];

const categoryLabels = {
  web: "Web Dev",
  uiux: "UI / UX Design",
  seo: "SEO Article",
};

const projects = [
  {
    id: "web-1",
    src: project11,
    category: "web",
    link: "https://github.com/yudhawira11/belajar-laravel-react-tailwind_Peminjaman-Buku.git",
  },
  {
    id: "web-2",
    src: project12,
    category: "web",
    link: "https://github.com/yudhawira11/belajar-laravel-react-tailwind_Pemesanan-tiket-bioskop.git",
  },
  {
    id: "web-3",
    src: project13,
    category: "web",
    link: "https://github.com/yudhawira11/projek-selekta.git",
  },
  {
    id: "web-4",
    src: project11Alt,
    category: "web",
    link: "https://iseedigitalmarketing.com/",
  },
  {
    id: "web-5",
    src: project12Alt,
    category: "web",
    link: project12Alt,
  },
  {
    id: "uiux-1",
    src: project13Alt,
    category: "uiux",
    link: "https://www.figma.com/proto/gF29eXcR2qpMYu9ja5THtc/Projek-SoilSense?node-id=110-428&p=f&m=dev&scaling=contain&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=110%3A129&t=IzPNhYRNUpwJZQUK-1",
  },
  {
    id: "uiux-2",
    src: project11Alt2,
    category: "uiux",
    link: "https://www.figma.com/proto/GdcZAyrr2lsadODO3EE0w5/Isee-Digital-Marketing?t=ODb1nOCFAQ5IS0B0-1&scaling=contain&content-scaling=responsive&page-id=0%3A1&node-id=26-3&starting-point-node-id=26%3A3",
  },
  {
    id: "seo-1",
    src: project12Alt2,
    category: "seo",
    link: "https://iseedigitalmarketing.com/konsultan-digital-marketing-untuk-strategi-bisnis-terukur/",
  },
  {
    id: "seo-2",
    src: project13Alt2,
    category: "seo",
    link: "https://iseedigitalmarketing.com/narasumber-digital-marketing-profesional-untuk-bisnis-modern/",
  },
];

export default function App() {
  const skillScrollRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  const [activeCategory, setActiveCategory] = useState("web");
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const container = skillScrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.5;

    const tick = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth / 2;
      container.scrollLeft += speed;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const loopSkills = [...skills, ...skills];
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const navItems = [
    { id: "home", label: "Home", ref: homeRef },
    { id: "about", label: "About", ref: aboutRef },
    { id: "skill", label: "Skill", ref: skillRef },
    { id: "project", label: "Project", ref: projectRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  const scrollToSection = (ref, id) => {
    const target = ref?.current;
    if (!target) return;
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset;
    const offset = Math.max(top - headerHeight - 8, 0);
    window.scrollTo({ top: offset, behavior: "smooth" });
    if (id) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "-";
    const email = formData.get("email") || "-";
    const phone = formData.get("phone") || "-";
    const message = formData.get("message") || "-";
    const subject = `Portfolio Contact - ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\nNo Telepon: ${phone}\n\nPesan:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "yudhajtz@gmail.com"
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Tambahkan class `cursor-target` ke semua button dan elemen bertanda "card"
    const addCursorTarget = (el) => {
      try {
        if (!el) return;
        if (el.matches && el.matches('button')) el.classList.add('cursor-target');
        if (el.className && /card/i.test(el.className)) el.classList.add('cursor-target');
      } catch (e) {
        // ignore
      }
    };

    const scanAndMark = (root = document) => {
      document.querySelectorAll('button, [class*="card" i]').forEach((el) => addCursorTarget(el));
    };

    scanAndMark();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          addCursorTarget(node);
          node.querySelectorAll && node.querySelectorAll('button, [class*="card" i]').forEach(addCursorTarget);
        }
      }
    });

    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Tambahkan TargetCursor di root agar animasi cursor aktif di seluruh halaman
  // Spin duration 2s, hover duration 0.6s, hide default cursor
  // Target semua elemen dengan class .cursor-target
  return (
    <div className="min-h-screen bg-page">
      <TargetCursor spinDuration={2} hoverDuration={0.6} hideDefaultCursor={true} targetSelector={".cursor-target"} />
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-border bg-page/90 backdrop-blur"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:gap-10 max-[650px]:gap-4 max-[650px]:px-4 max-[650px]:py-4">
          <button
            type="button"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="relative rounded-lg bg-accentLight p-[1px] transition hover:brightness-110"
            aria-label="Toggle theme"
          >
            <span className="block rounded-lg bg-panel px-7 py-3 font-inter text-[16px] font-bold text-accentLight max-[650px]:px-5 max-[650px]:py-2 max-[650px]:text-[14px]">
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </button>
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-[650px]:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveNav(item.id);
                  scrollToSection(item.ref, item.id);
                }}
                className={`nav-link w-[140px] rounded-2xl px-6 py-4 text-[15px] font-bold hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4 max-[650px]:w-auto max-[650px]:rounded-xl max-[650px]:px-4 max-[650px]:py-2 max-[650px]:text-[13px] ${
                  activeNav === item.id
                    ? "text-accentSoft underline decoration-white decoration-2 underline-offset-4"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        ref={homeRef}
        className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 py-12 md:flex-row md:gap-12 max-[650px]:items-center max-[650px]:gap-8 max-[650px]:px-4 max-[650px]:py-8 max-[650px]:text-center"
      >
        <div className="flex w-full flex-col gap-6 md:w-2/3 max-[650px]:items-center max-[650px]:text-center">
          <div className="flex items-center gap-4 max-[650px]:justify-center">
            <img src={imgPngwingCom11} alt="" className="h-8 w-8" />
            <p className="text-[15px] text-white max-[650px]:text-[14px]">
              Hi, I’m <span className="font-bold text-accentSoft">Yudha W. D.</span>
            </p>
          </div>
          <TextType
            as="h1"
            text={["Web Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            className="text-[40px] font-bold text-white max-[650px]:text-[28px] max-[650px]:leading-tight"
          />
          <p className="text-[15px] leading-relaxed text-white max-[650px]:text-[14px]">
            Saya berkomitmen untuk terus belajar dan mengembangkan kemampuan
            dalam membangun aplikasi web yang clean dan scalable sesuai best
            practice. Bagi saya, coding adalah tentang menciptakan solusi
            digital yang bermanfaat dan berdampak.
          </p>
          <div className="flex flex-wrap items-center gap-4 max-[650px]:justify-center">
            <span className="text-[15px] text-white max-[650px]:text-[14px]">
              Follow me
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "https://github.com/yudhawira11";
                }}
                className="h-7 w-7"
                aria-label="GitHub"
              >
                <img src={imgGitHub} alt="GitHub" className="h-7 w-7 theme-icon" />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "https://www.instagram.com/yudha9c70";
                }}
                className="h-7 w-7"
                aria-label="Instagram"
              >
                <img
                  src={imgInstagram}
                  alt="Instagram"
                  className="h-7 w-7 theme-icon"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 max-[650px]:w-full max-[650px]:flex-col max-[650px]:items-stretch">
            <button
              type="button"
              onClick={() => {
                const message =
                  "Halo bang, saya ingin kolaborasi/kerjasama/ingin dibuatkan web.";
                const whatsappUrl = `https://wa.me/6282229672395?text=${encodeURIComponent(
                  message
                )}`;
                window.location.href = whatsappUrl;
              }}
              className="rounded-2xl bg-accent px-9 py-2 text-[15px] text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-accentSoft hover:text-white hover:brightness-110 hover:shadow-[0_8px_20px_rgba(137,44,220,0.35)] active:translate-y-0 max-[650px]:w-full max-[650px]:px-6 max-[650px]:text-[14px]"
            >
              Hire Me
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-2xl border border-accent px-9 py-2 text-[15px] text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accentSoft hover:bg-accent/20 hover:text-accentSoft hover:shadow-[0_8px_20px_rgba(137,44,220,0.2)] active:translate-y-0 max-[650px]:w-full max-[650px]:px-6 max-[650px]:text-[14px]"
            >
              Download CV
            </button>
          </div>
        </div>
        <PixelCard
          variant="pink"
          className="h-[420px] w-full max-w-[360px] rounded-[50px] border-border bg-surface md:w-[360px] max-[650px]:h-[320px] max-[650px]:max-w-[280px] max-[650px]:rounded-[32px] max-[650px]:self-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="h-[354px] w-[332px] max-[650px]:h-[250px] max-[650px]:w-[230px]">
                <img
                  src={korsaImage}
                  alt="Profile"
                  className="h-full w-full object-contain"
                />
              </div>
              <img
                src={imgIcon1}
                alt=""
                className="absolute left-[15%] top-[45%] h-8 w-8 rounded-full max-[650px]:h-6 max-[650px]:w-6"
              />
              <img
                src={imgReactLogo21}
                alt=""
                className="absolute right-[12%] top-[38%] h-7 w-7 max-[650px]:h-5 max-[650px]:w-5"
              />
              <img
                src={imgIdC111Tb5D17724662657431}
                alt=""
                className="absolute left-[28%] top-[20%] h-10 w-10 rounded-full max-[650px]:h-7 max-[650px]:w-7"
              />
              <img
                src={imgPngwingCom12}
                alt=""
                className="absolute right-[18%] top-[28%] h-8 w-8 max-[650px]:h-6 max-[650px]:w-6"
              />
              <img
                src={imgPngwingCom21}
                alt=""
                className="absolute left-[12%] top-[32%] h-8 w-8 max-[650px]:h-6 max-[650px]:w-6"
              />
            </div>
          </div>
        </PixelCard>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:gap-12 max-[650px]:items-center max-[650px]:gap-6 max-[650px]:px-4 max-[650px]:py-8 max-[650px]:text-center"
      >
        <div className="flex flex-col items-start gap-2 text-white md:w-1/3 md:self-stretch md:justify-center max-[650px]:items-center max-[650px]:text-center">
          <div className="text-[100px] font-bold leading-none max-[650px]:text-[64px]">
            1 +
          </div>
          <div className="text-[30px] font-bold leading-tight max-[650px]:text-[20px]">
            <div>Tahun</div>
            <div>Pengalaman</div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-5 text-center md:w-2/3 max-[650px]:gap-4">
          <h2 className="text-[30px] font-bold text-white max-[650px]:text-[24px]">
            About Me
          </h2>
          <img src={imgFrame27} alt="" className="h-5 w-36" />
          <p className="text-[15px] leading-relaxed text-white max-[650px]:text-[14px]">
            Saya Yudha Wira Dharma, Web Developer yang sangat passionate dan
            berdedikasi terhadap pekerjaan saya. Sebagai mahasiswa Informatika
            dengan minat kuat di bidang web development, saya terus
            mengembangkan keterampilan dan pengetahuan untuk membangun aplikasi
            web yang clean, scalable, dan berdampak.
          </p>
          <p className="text-[15px] font-bold text-white max-[650px]:text-[14px]">
            yudhajtz@gmail.com
          </p>
          <div className="flex flex-col gap-6 md:flex-row max-[650px]:w-full max-[650px]:items-center">
            <div className="flex w-[300px] flex-col items-center gap-3 rounded-3xl border border-border bg-card p-5 max-[650px]:w-full max-[650px]:max-w-[320px] max-[650px]:p-4 max-[650px]:mx-auto">
              <img
                src={imgWeb}
                alt=""
                className="h-24 w-24 object-contain theme-icon max-[650px]:h-20 max-[650px]:w-20"
              />
              <p className="text-[15px] text-accentBlue max-[650px]:text-[14px]">
                Web Developer
              </p>
              <p className="text-[15px] text-white max-[650px]:text-[14px]">
                Berpengalaman membangun aplikasi web yang clean, fungsional,
                dan scalable.
              </p>
            </div>
            <div className="flex w-[300px] flex-col items-center gap-3 rounded-3xl border border-border bg-card p-5 max-[650px]:w-full max-[650px]:max-w-[320px] max-[650px]:p-4 max-[650px]:mx-auto">
              <img
                src={imgDesigner}
                alt=""
                className="h-24 w-24 object-contain theme-icon max-[650px]:h-20 max-[650px]:w-20"
              />
              <p className="text-[15px] text-accentBlue max-[650px]:text-[14px]">
                UI / UX Designer
              </p>
              <p className="text-[15px] text-white max-[650px]:text-[14px]">
                Berpengalaman merancang UI yang intuitif dan berfokus pada
                pengalaman pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skill"
        ref={skillRef}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-12 max-[650px]:px-4 max-[650px]:py-8"
      >
        <h2 className="text-[30px] font-bold text-white max-[650px]:text-[24px]">
          Skill
        </h2>
        <img src={imgFrame27} alt="" className="h-5 w-36" />
        <div
          ref={skillScrollRef}
          onWheel={(event) => {
            if (!skillScrollRef.current) return;
            event.preventDefault();
            skillScrollRef.current.scrollLeft += event.deltaY;
          }}
          className="flex w-full items-center justify-center gap-[10px] overflow-x-auto overflow-y-hidden py-[70px] max-[650px]:gap-[14px] max-[650px]:py-[24px]"
        >
          {loopSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-[10px] max-[650px]:gap-[14px]"
            >
              <div className="flex shrink-0 flex-col items-center justify-center gap-[10px] px-[50px] max-[650px]:gap-[6px] max-[650px]:px-[24px]">
                <img
                  src={skill.icon}
                  alt=""
                  className="h-[70px] w-[70px] object-contain max-[650px]:h-[50px] max-[650px]:w-[50px]"
                />
                <p className="text-[20px] font-bold text-white max-[650px]:text-[16px]">
                  {skill.name}
                </p>
              </div>
              {index < loopSkills.length - 1 && (
                <img
                  src={frame41}
                  alt=""
                  className="h-[100px] w-[100px] shrink-0 invert-on-light max-[650px]:h-[56px] max-[650px]:w-[56px] max-[650px]:mx-[20px]"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="project"
        ref={projectRef}
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-6 py-12 md:px-[70px] max-[650px]:px-4 max-[650px]:py-8"
      >
        <h2 className="text-[30px] font-bold text-white max-[650px]:text-[24px]">
          Project
        </h2>
        <img
          src={imgFrame27}
          alt=""
          className="h-[20px] w-[150px] max-[650px]:h-[16px] max-[650px]:w-[120px]"
        />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-wrap items-end gap-[30px] py-[50px] max-[650px]:gap-[16px] max-[650px]:py-[30px]">
            <div className="flex w-[100px] flex-col items-start justify-end gap-[20px] p-[5px] max-[650px]:w-full max-[650px]:flex-row max-[650px]:items-center max-[650px]:justify-start max-[650px]:gap-[12px] max-[650px]:text-left">
              <img
                src={imgDescendingSorting}
                alt=""
                className="h-[50px] w-[50px] object-contain theme-icon max-[650px]:h-[40px] max-[650px]:w-[40px]"
              />
              <p className="text-[20px] font-bold text-white max-[650px]:text-[16px]">
                Sort
              </p>
            </div>
            {projectCategories.map((item) => {
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCategory(item.id)}
                  aria-pressed={isActive}
                  className={`group flex items-center gap-[30px] text-left transition hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 max-[650px]:gap-[12px] ${
                    isActive
                      ? "text-white underline decoration-white underline-offset-4"
                      : "text-white/60"
                  }`}
                >
                  <span
                    data-active={isActive ? "true" : "false"}
                    className={`bullet-dot h-[20px] w-[20px] rounded-full border transition-all max-[650px]:h-[14px] max-[650px]:w-[14px] ${
                      isActive
                        ? "border-accentSoft bg-accentSoft shadow-[0_0_10px_rgba(188,111,241,0.7)]"
                        : "border-white/40 bg-white/10 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(137,44,220,0.7)]"
                    }`}
                  />
                  <p className="text-[20px] font-bold max-[650px]:text-[16px]">
                    {item.label}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 place-items-center gap-[50px] md:grid-cols-3">
            {filteredProjects.map((project) => {
              const content = (
                <img
                  src={project.src}
                  alt={`Project ${categoryLabels[project.category]}`}
                  className="h-full w-full object-cover"
                />
              );

              return (
                <div
                  key={project.id}
                  data-category={project.category}
                  className="h-[225px] w-full max-w-[400px] md:w-[400px] max-[650px]:h-[200px] max-[650px]:max-w-[320px]"
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full w-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-12 max-[650px]:px-4 max-[650px]:py-8"
      >
        <h2 className="text-[30px] font-bold text-white max-[650px]:text-[24px]">
          Contact
        </h2>
        <img
          src={imgFrame27}
          alt=""
          className="h-[20px] w-[150px] max-[650px]:h-[16px] max-[650px]:w-[120px]"
        />
        <form
          onSubmit={handleContactSubmit}
          className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-card p-6 max-[650px]:p-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-[14px] text-white/80">
              Nama
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-[15px] text-white outline-none transition focus:border-accentSoft max-[650px]:text-[14px]"
                placeholder="Nama lengkap"
              />
            </label>
            <label className="flex flex-col gap-2 text-[14px] text-white/80">
              Email
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-[15px] text-white outline-none transition focus:border-accentSoft max-[650px]:text-[14px]"
                placeholder="email@domain.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-[14px] text-white/80">
            No Telepon
            <input
              name="phone"
              type="tel"
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-[15px] text-white outline-none transition focus:border-accentSoft max-[650px]:text-[14px]"
              placeholder="08xxxxxxxxxx"
            />
          </label>
          <label className="flex flex-col gap-2 text-[14px] text-white/80">
            Pesan
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-[15px] text-white outline-none transition focus:border-accentSoft max-[650px]:text-[14px]"
              placeholder="Tulis pesan kamu..."
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-2xl bg-accent px-6 py-3 text-[15px] font-semibold text-white transition hover:brightness-110 max-[650px]:text-[14px]"
          >
            Kirim Pesan
          </button>
          <p className="text-[12px] text-white/60">
            Setelah submit, kamu akan diarahkan ke email untuk mengirim
            pesan ke yudhajtz@gmail.com.
          </p>
        </form>
      </section>

      <footer className="border-t border-border py-6 max-[650px]:px-4">
        <p className="text-center text-[14px] text-white max-[650px]:text-[12px]">
          Copyright &copy; By Yudha W. D || All right reserved.
        </p>
      </footer>
    </div>
  );
}
