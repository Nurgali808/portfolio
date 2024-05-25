
import { Icon } from "@iconify/react";

import Logo from "./images/logo.svg";

import HeroLight from "./images/rere.jpeg";
import HeroDark from "./images/asas.jpeg";

export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "Nurgali808";


export const navLogo = undefined;


export const Blog = <Icon icon="ph:link-bold" />;


export const moreInfo =
  "Обучающиеся фронтенд-разработчик и веб-дизайнер с более чем года опыта в создании современных, функциональных и визуально привлекательных веб-сайтов. \n" +
    "Обладаю обширными знаниями в области UX/UI дизайна, адаптивной верстки и работы с современными JavaScript фреймворками.\n" +
    "Умело сочетаю креативный подход к дизайну с техническими навыками для создания уникальных и эффективных цифровых решений. \n" +
    "Стремлюсь к непрерывному совершенствованию и использованию новейших технологий и инструментов.";

export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];


export const resume = null;


export const filteredProjects = ["example-1", "example-2", "example-3"];

export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];


export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
