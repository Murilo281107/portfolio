/* Lógica do site — normalmente você NÃO precisa editar este arquivo. */

const UI = {
  pt: {
    nav_about: "Sobre Mim", nav_projects: "Projetos", nav_experience: "Experiências", nav_contact: "Contato",
    hello: "Olá, eu sou", cta: "Entre em contato",
    f_name: "Nome", f_email: "E-mail", f_message: "Mensagem", f_send: "Enviar mensagem",
    sending: "Enviando...", sent: "Mensagem enviada! Obrigado pelo contato.",
    fail: "Não foi possível enviar. Tente novamente ou use um dos ícones ao lado.",
    err_name: "Informe seu nome (mín. 2 letras).", err_email: "Informe um e-mail válido.", err_message: "Escreva uma mensagem (mín. 10 caracteres).",
    code: "Ver código no GitHub →", noimg: "Sem imagem", rights: "Todos os direitos reservados.",
  },
  en: {
    nav_about: "About Me", nav_projects: "Projects", nav_experience: "Experience", nav_contact: "Contact",
    hello: "Hi, I'm", cta: "Get in touch",
    f_name: "Name", f_email: "Email", f_message: "Message", f_send: "Send message",
    sending: "Sending...", sent: "Message sent! Thanks for reaching out.",
    fail: "Could not send. Please try again or use one of the icons.",
    err_name: "Enter your name (min. 2 letters).", err_email: "Enter a valid email.", err_message: "Write a message (min. 10 characters).",
    code: "View code on GitHub →", noimg: "No image", rights: "All rights reserved.",
  },
};

let lang = localStorage.getItem("lang") || "pt";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const ICONS = {
  email: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.4-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.900 1.200 2.200 1.300.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.900.9c.3.1.5.2.5.3.1.100.1.700-.1 1.400z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18v-7.700H5.700V18h2.600zM7 9.200c.9 0 1.500-.6 1.500-1.400S7.900 6.400 7 6.400s-1.500.6-1.500 1.400S6.100 9.200 7 9.200zM18.300 18v-4.300c0-2.300-1.200-3.400-2.900-3.400-1.300 0-1.900.7-2.200 1.200v-1H10.600c0 .7 0 7.500 0 7.500h2.600v-4.200c0-.2 0-.5.100-.6.200-.5.600-1 1.300-1 .9 0 1.300.7 1.300 1.700V18h2.400z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.200 19.500c.5.1.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.1-.6.1-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.400 9.400 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2z"/></svg>',
};

function render() {
  const t = UI[lang];
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = `${SITE.name} | Portfolio`;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n]));
  $("langBtn").textContent = lang === "pt" ? "EN" : "PT";
  $("logo").textContent = SITE.name;
  $("heroName").textContent = SITE.name;
  $("heroRole").textContent = SITE.role[lang];
  $("aboutText").textContent = SITE.about[lang];
  $("footerText").textContent = `© ${new Date().getFullYear()} ${SITE.name}. ${t.rights}`;

  // Avatar
  const initials = SITE.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  $("avatar").innerHTML = SITE.photo ? `<img src="${esc(SITE.photo)}" alt="${esc(SITE.name)}" onerror="this.parentNode.textContent='${esc(initials)}'">` : esc(initials);

  $("skills").innerHTML = SITE.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("");
  $("facts").innerHTML = SITE.facts.map((f) => `<div class="fact"><small>${esc(f.label[lang])}</small><strong>${esc(f.value[lang])}</strong></div>`).join("");

  // Projetos: do mais antigo ao mais recente
  const projects = [...(SITE.projects || [])].sort((a, b) => a.date.localeCompare(b.date));
  $("timeline").innerHTML = projects.map((p) => {
    const [y, m] = p.date.split("-");
    const dateLabel = m ? new Date(y, m - 1).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { month: "long", year: "numeric" }) : y;
    const img = p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="this.parentNode.textContent='${t.noimg}'">` : t.noimg;
    return `<article class="t-item">
      <div class="t-date">${esc(dateLabel)}</div>
      <div class="t-card">
        <div class="t-img">${img}</div>
        <div class="t-body">
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.description[lang])}</p>
          <div class="chips">${p.tech.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
          <a class="t-link" href="${esc(p.github)}" target="_blank" rel="noopener">${t.code}</a>
        </div>
      </div></article>`;
  }).join("");

  $("experiences").innerHTML = (SITE.experiences || []).map((e) => `<div class="card">
      <h3>${esc(e.org)}</h3><div class="role">${esc(e.title[lang])}</div>
      <div class="period">${esc(e.period[lang])}</div><p>${esc(e.description[lang])}</p></div>`).join("");

  const c = SITE.contact;
  const links = [
    ["E-mail", c.email, `mailto:${c.email}`, ICONS.email],
    ["WhatsApp", "+" + c.whatsapp, `https://wa.me/${c.whatsapp}`, ICONS.whatsapp],
    ["LinkedIn", "LinkedIn", c.linkedin, ICONS.linkedin],
    ["GitHub", "GitHub", c.github, ICONS.github],
  ];
  $("contactIcons").innerHTML = links.map(([n, v, h, i]) => `<a class="icon-link" href="${esc(h)}" target="_blank" rel="noopener" aria-label="${n}">${i}<span><strong>${n}</strong><br><small>${esc(v)}</small></span></a>`).join("");
}

// Menu mobile e idioma
$("menuBtn").onclick = () => $("nav").classList.toggle("open");
$("nav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("nav").classList.remove("open"); });
$("langBtn").onclick = () => { lang = lang === "pt" ? "en" : "pt"; localStorage.setItem("lang", lang); render(); };

// Formulário com validação básica + envio por e-mail (FormSubmit.co)
$("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target, t = UI[lang], st = $("formStatus");
  const name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
  [f.name, f.email, f.message].forEach((x) => x.classList.remove("invalid"));
  st.className = "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2) { f.name.classList.add("invalid"); st.textContent = t.err_name; st.className = "err"; return; }
  if (!emailOk) { f.email.classList.add("invalid"); st.textContent = t.err_email; st.className = "err"; return; }
  if (message.length < 10) { f.message.classList.add("invalid"); st.textContent = t.err_message; st.className = "err"; return; }
  if (f._honey.value) return; // anti-spam
  st.textContent = t.sending;
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.contact.formReceiver)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message, _subject: `Portfólio: mensagem de ${name}`, _replyto: email }),
    });
    if (!res.ok) throw new Error();
    st.textContent = t.sent; st.className = "ok"; f.reset();
  } catch {
    st.textContent = t.fail; st.className = "err";
  }
});

render();
