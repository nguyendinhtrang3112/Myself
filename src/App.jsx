import React from 'react';
import { Terminal, Code2, Database, Layout, Github, Linkedin, Mail, ArrowRight, ExternalLink, Cpu } from 'lucide-react';

const ProfileData = {
  name: "Nguyễn Đình Tráng",
  role: "Software Engineering Intern",
  techStack: ["React", "Node.js", "TypeScript", "Java", "PHP"],
  about: "Xin chào! Tôi là một sinh viên CNTT đam mê lĩnh vực phát triển Web (Web Development). Tôi luôn nỗ lực học hỏi các công nghệ mới và mong muốn được áp dụng kiến thức vào các dự án thực tế. Định hướng của tôi là trở thành một Full-stack Developer chuyên nghiệp, tạo ra những sản phẩm phần mềm chất lượng, tốc độ cao và trải nghiệm người dùng tối ưu.",
  contact: {
    email: "trangvip58@gmail.com",
    github: "github.com/nguyendinhtrang3112"
  },
  skills: [
    { category: "Frontend", items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"], icon: <Layout className="text-emerald-400" size={24} /> },
    { category: "Backend & DB", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Java", "PHP"], icon: <Database className="text-emerald-400" size={24} /> },
    { category: "Tools & Core", items: ["Git / GitHub", "VS Code", "Postman", "OOP / DSA"], icon: <Terminal className="text-emerald-400" size={24} /> }
  ],
  projects: [
    {
      title: "Expensive-Tracker",
      description: "Xây dựng ứng dụng quản lí chi tiêu giúp người dùng có thể biết thu nhập và chi tiêu hàng ngày trong tháng để từ đó đưa ra các phương án thích hợp cho chi tiêu của bản thân .",
      tech: ["ReactJS", "Node.js", "MongoDB", "ExpressJS", "JWT"],
      link: "",
      github: "https://github.com/nguyendinhtrang3112/Expensive-Tracker"
    },
    {
      title: "Task Management System",
      description: "Ứng dụng quản lý công việc nhóm mô phỏng Trello, hỗ trợ kéo thả (drag & drop), phân quyền người dùng và realtime updates.",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#"
    }
  ],
  education: {
    degree: "Sinh viên CNTT",
    university: "Đại học Mỏ Đia Chất (Humg)",
    period: "2022 - 2026 (Dự kiến)",
    gpa: "GPA: 3.24/4.0",
    courses: ["Cấu trúc Dữ liệu & Giải thuật", "Cơ sở Dữ liệu", "Mạng Máy tính", "Kiến trúc Phần mềm"]
  }
};

function App() {
  return (
    <>
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>

      <nav style={styles.nav}>
        <div className="container" style={styles.navContainer}>
          <div style={styles.logo}>
            <Terminal size={24} color="var(--primary)" />
            <span>Tráng.dev</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}><span className="highlight">01.</span> About</a>
            <a href="#skills" style={styles.navLink}><span className="highlight">02.</span> Skills</a>
            <a href="#projects" style={styles.navLink}><span className="highlight">03.</span> Work</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Resume</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="container" style={styles.heroSection}>
          <div className="animate-fade-up">
            <p className="highlight" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Hi, my name is</p>
          </div>
          <div className="animate-fade-up delay-1">
            <h1 style={styles.heroName}>{ProfileData.name}.</h1>
          </div>
          <div className="animate-fade-up delay-2">
            <h2 style={styles.heroRole}>I build things for the web.</h2>
          </div>
          <div className="animate-fade-up delay-3">
            <p style={styles.heroBio}>
              Tôi là một <span className="highlight">IT Intern</span> tập trung vào phát triển ứng dụng web hiện đại.
              Hiện tại, tôi đang tìm kiếm cơ hội thực tập để đóng góp và phát triển kỹ năng kiến tạo phần mềm.
            </p>
          </div>
          <div className="animate-fade-up delay-3" style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="btn btn-primary">
              Check out my work <ArrowRight size={18} />
            </a>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={ProfileData.contact.github} className="btn-icon" title="GitHub"><Github size={20} /></a>
              <a href={ProfileData.contact.linkedin} className="btn-icon" title="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" className="section container">
          <div className="section-head animate-fade-up">
            <span className="section-number">01.</span>
            <h2 className="section-title">About Me & Education</h2>
          </div>

          <div style={styles.grid2}>
            <div className="glass-card animate-fade-up">
              <h3 style={styles.cardHeader}><Code2 size={24} color="var(--primary)" /> Profile</h3>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {ProfileData.about}
              </p>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.8 }}>
                Vài công nghệ dạo gần đây tôi thường làm việc:
              </p>
              <ul style={styles.techList}>
                {ProfileData.techStack.map((tech, i) => (
                  <li key={i} style={styles.techItem}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card animate-fade-up delay-1">
              <h3 style={styles.cardHeader}><Cpu size={24} color="var(--primary)" /> Education</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.25rem' }}>{ProfileData.education.degree}</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 500, marginBottom: '0.5rem' }}>{ProfileData.education.university}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--secondary)', fontSize: '0.95rem' }}>
                  <span>{ProfileData.education.period}</span>
                  <span>{ProfileData.education.gpa}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>Các môn học tiêu biểu:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ProfileData.education.courses.map((course, i) => (
                  <span key={i} style={styles.badge}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">
          <div className="section-head animate-fade-up">
            <span className="section-number">02.</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <div style={styles.grid3}>
            {ProfileData.skills.map((skillGroup, index) => (
              <div key={index} className="glass-card animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div style={styles.iconBox}>{skillGroup.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>{skillGroup.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {skillGroup.items.map((item, i) => (
                    <span key={i} style={styles.outlineBadge}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <div className="section-head animate-fade-up">
            <span className="section-number">03.</span>
            <h2 className="section-title">Some Things I've Built</h2>
          </div>

          <div style={styles.projectsGrid}>
            {ProfileData.projects.map((project, index) => (
              <div key={index} className="glass-card animate-fade-up" style={styles.projectCard}>
                <div style={styles.projectTop}>
                  <Terminal size={40} color="var(--primary)" opacity={0.3} style={{ position: 'absolute', top: -10, right: -10 }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', flexGrow: 1 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {project.tech.map((t, i) => (
                      <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--primary)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className="btn-icon" style={{ width: 35, height: 35 }} title="Source Code">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="btn-icon" style={{ width: 35, height: 35 }} title="Live Demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section container" style={{ textAlign: 'center', maxWidth: '600px', paddingBottom: '10rem' }}>
          <div className="animate-fade-up">
            <p className="highlight" style={{ marginBottom: '1rem' }}>04. What's Next?</p>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
              Tôi hiện đang tìm kiếm cơ hội thực tập Web Developer. Hộp thư của tôi luôn mở, cho dù bạn có thắc mắc hay chỉ muốn chào hỏi, tôi sẽ cố gắng phản hồi lại bạn sớm nhất có thể!
            </p>
            <a href={`mailto:${ProfileData.contact.email}`} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Say Hello <Mail size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          <p>Designed taking inspiration from Brittany Chiang</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>Built by {ProfileData.name}</p>
        </div>
      </footer>
    </>
  );
}

const styles = {
  nav: {
    padding: '1.5rem 0',
    position: 'fixed',
    top: 0,
    width: '100%',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(13, 17, 23, 0.8)',
    zIndex: 100,
    borderBottom: '1px solid var(--card-border)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: '1.2rem',
    color: '#fff',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    color: 'var(--text-main)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    display: 'flex',
    gap: '0.3rem',
  },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '6rem',
    maxWidth: '1000px'
  },
  heroName: {
    fontSize: 'clamp(40px, 8vw, 80px)',
    color: '#e6edf3',
    lineHeight: 1.1,
    marginHover: 0,
  },
  heroRole: {
    fontSize: 'clamp(30px, 6vw, 60px)',
    color: '#8b949e',
    lineHeight: 0.9,
    marginBottom: '2rem',
  },
  heroBio: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: 'var(--secondary)',
    maxWidth: '540px',
    lineHeight: 1.6,
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid var(--card-border)'
  },
  techList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    listStyle: 'none',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    color: 'var(--secondary)'
  },
  techItem: {
    position: 'relative',
    paddingLeft: '1.5rem',
  },
  badge: {
    backgroundColor: 'rgba(63, 185, 80, 0.1)',
    color: 'var(--primary)',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    border: '1px solid rgba(63, 185, 80, 0.2)'
  },
  iconBox: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    backgroundColor: 'rgba(63, 185, 80, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem auto',
    border: '1px solid rgba(63, 185, 80, 0.2)'
  },
  outlineBadge: {
    border: '1px solid var(--card-border)',
    color: 'var(--text-main)',
    padding: '0.4rem 1rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    backgroundColor: 'rgba(255,255,255,0.02)'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
  },
  projectTop: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    color: 'var(--secondary)',
    borderTop: '1px solid var(--card-border)',
    backgroundColor: 'rgba(13, 17, 23, 0.9)'
  }
};

const styleSheet = document.createElement("style")
styleSheet.innerText = `
  @media (min-width: 768px) {
    div[style*="grid2"] {
      grid-template-columns: 1fr 1fr !important;
    }
    div[style*="grid3"] {
      grid-template-columns: repeat(3, 1fr) !important;
    }
    div[style*="projectsGrid"] {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important;
    }
  }
  
  /* Fix tech item bullet */
  li[style*="techItem"]::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
  }
`
document.head.appendChild(styleSheet)

export default App;
