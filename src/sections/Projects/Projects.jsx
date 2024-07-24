import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import mega_mall from '../../assets/mega_mall.png';
import Pixel_Chat from '../../assets/Pixel_Chat.jpg';
import TechTalk from '../../assets/TechTalk.jpg';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mega_mall}
          link="https://mega-mall-peach.vercel.app/"
          h3="Mega-Mall"
          p="E-commerce App"
        />
        <ProjectCard
          src={Pixel_Chat}
          link="https://pixelchat-gamma.vercel.app/"
          h3="Pixel Chat"
          p="Chatting App"
        />
        <ProjectCard
          src={TechTalk}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TechTalks"
          p="Blog App"
        />
     
      </div>
    </section>
  );
}

export default Projects;
