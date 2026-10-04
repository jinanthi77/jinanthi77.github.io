<div align="center">

# ✨ Jinanthi Hansika — Portfolio ✨

A responsive personal portfolio site built with React and Vite, based on a
Figma design. It showcases my education, projects, and skills, with a
working contact form.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github&logoColor=white&style=for-the-badge)](https://jinanthi77.github.io)

**🔗 [View Live Site](https://jinanthi77.github.io)**

</div>

<br>

<div align="center">

### 📑 Table of Contents

[Features](#-features) • [Built With](#%EF%B8%8F-built-with) • [Project Structure](#-project-structure) • [Editing Content](#%EF%B8%8F-editing-content) • [Deployment](#-deployment) • [License](#-license) • [Contact](#-contact)

</div>

<br>

---

## ✨ Features

- 📱 Fully responsive — works on desktop, tablet, and mobile
- 🌌 Animated, glowing hero background
- 🧭 Navigation bar that highlights the section you're currently viewing
- 🎓 Education timeline
- 🖼️ Project gallery with a detail panel linking out to Figma and GitHub per project
- 🛠️ Categorized skills section with a pop-in animation on scroll
- 📬 Working contact form (via [Formspree](https://formspree.io))
- 🔗 Social links: LinkedIn, GitHub, Behance, Gmail

---

## 🛠️ Built With

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- Plain CSS (no framework) — responsive with `clamp()`, Flexbox and Grid
- [react-icons](https://react-icons.github.io/react-icons/) for all icons

---

## 📂 Project Structure

```
src/
├── components/     # One component + matching .css file per section
├── assets/images/  # Profile photo, project thumbnails, background art
├── config.js       # All external links in one place (resume, social, projects)
├── index.css       # Global styles, color and font variables
├── App.jsx         # Page layout — pulls the sections together
└── main.jsx         # App entry point
```

---

## ✏️ Editing Content

Almost everything you'd want to personalize lives in one of these places:

| 🧩 What to change | 📍 Where |
|---|---|
| Resume, email, social links | `src/config.js` |
| Project list, descriptions, Figma/GitHub links per project | `src/components/Projects.jsx` |
| About Me text | `src/components/Hero.jsx` |
| Education entries | `src/components/Education.jsx` |
| Skills list | `src/components/Skills.jsx` |
| Colors and fonts | `src/index.css` (the `:root` variables at the top) |

---

## 🚀 Deployment

This site is deployed to **GitHub Pages**. To update the live site:

```bash
npm run build
```

Then redeploy the contents of the `dist/` folder using your usual GitHub
Pages process.

---

## 📄 License

This project is open for reference, but please don't copy the design or
content as your own — it's personal work. Feel free to use the code
structure as a learning reference.

---

## 📬 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge)](https://www.linkedin.com/in/jinanthi-hansika-440b84283/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/jinanthi77)
[![Behance](https://img.shields.io/badge/Behance-View%20Work-1769FF?logo=behance&logoColor=white&style=for-the-badge)](https://www.behance.net/jinanthihansika77)

</div>

<br>

<div align="center">

Made with 🖤 by **Jinanthi Hansika**

</div>
