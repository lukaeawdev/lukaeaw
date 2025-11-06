import React from 'react';
import styles from './SkillCard.module.css';

function SkillCard({ icon }) {
  return (
    <div className={styles.skillCard}>
      <img
        src={icon}
        alt='Skill Icon'
        className={styles.skillCardIcon}
      />
    </div>
  );
}

export default SkillCard;