import React from 'react';
import styles from './SkillCard.module.css';
import * as motion from "motion/react-client";

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
};

function SkillCard({ icon }) {
  return (
    <motion.div
      className={styles.skillCard}
      layout
      transition={spring}
    >
      <img
        src={icon}
        alt='Skill Icon'
        className={styles.skillCardIcon}
      />
    </motion.div>
  );
}

export default SkillCard;