const SITE = {
  name: "Murilo Barroso Domene",
  photo: "assets/minhafoto.png",
  role: {
    pt: "Estudante de Engenharia de Software",
    en: "Software Engineering Student",
  },

  about: {
    pt: "Olá! Sou estudante de Engenharia de Software na PUC Minas, com interesse em desenvolvimento web, arquitetura de sistemas e boas práticas de código. Busco oportunidades de estágio para aprender, ganhar experiência e contribuir em projetos reais.",
    en: "Hi! I'm a Software Engineering student at PUC Minas, interested in web development, system architecture and clean code. I'm looking for internship opportunities to learn, acquire experience and contribute to real projects.",
  },

  facts: [
    { label: { pt: "Formação", en: "Education" }, value: { pt: "Engenharia de Software — PUC Minas", en: "Software Engineering — PUC Minas" } },
    { label: { pt: "Área de atuação", en: "Focus" }, value: { pt: "Desenvolvimento Web", en: "Web Development" } },
    { label: { pt: "Interesses", en: "Interests" }, value: { pt: "Front-end, APIs, Cloud", en: "Front-end, APIs, Cloud" } },
    { label: { pt: "Objetivo", en: "Goal" }, value: { pt: "Estágio em desenvolvimento", en: "Development internship" } },
  ],

  skills: ["HTML", "CSS", "JavaScript", "Git", "React", "Node.js"],

  projects: [
    {
      name: "Pedalaki",
      date: "2026-03", // AAAA-MM
      description: {
        pt: "Website para ciclistas que auxiliam na maioria de suas dificuldades",
        en: "Website made for cyclists to help them in most of their needs",
      },
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti1-7620100-pedalaki",
      image: "assets/Pedalaki.png", // ex.: "assets/projeto2.gif"
    },
  ],

  // ✏️ Preencha com suas experiências (estágios, freelas, open source, eventos).
  experiences: [
    {
      org: "Nome da empresa / instituição",
      title: { pt: "Cargo ou atividade", en: "Role or activity" },
      period: { pt: "Mês/AAAA – Mês/AAAA", en: "Month/YYYY – Month/YYYY" },
      description: {
        pt: "Breve descrição do que você fez.",
        en: "Brief description of what you did.",
      },
    },
  ],

  contact: {
    email: "murilobd2007@gmail.com",
    whatsapp: "5567991096666",
    linkedin: "https://www.linkedin.com/in/murilo-domene-7522563b2/",
    github: "https://github.com/Murilo281107",
    formReceiver: "murilobd2007@gmail.com",
  },
};
