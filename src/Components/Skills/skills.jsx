import React, { useRef } from 'react';
import styles from './skills.module.css';
import SkillCard from '../SkillCard/SkillCard.jsx';
import { motion, useInView } from "motion/react";

const initialSkills = [
  { id: 1, icon: '/html.png' },
  { id: 2, icon: '/css.png' },
  { id: 3, icon: '/js.png' },
  { id: 4, icon: '/react.png' },
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={styles.skillsSection}
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      animate={{
        y: isInView ? 0 : 50,
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(8px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className={styles.skillsTitle}>My Skills</h2>
      <div className={styles.skillsContainer}>
        {initialSkills.map(skill => (
          <SkillCard key={skill.id} icon={skill.icon} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;