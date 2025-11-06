import React, { useState, useEffect, useRef } from 'react';
import styles from './githubReposCard.module.css';
import { motion, useInView } from "motion/react";

const GITHUB_USERNAME = 'lukaeawdev';

const StarIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 13.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.192L.644 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
  </svg>
);

const ForkIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 12.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
  </svg>
);

const ClockIcon = () => (
    <svg className={styles.metaIcon} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25a.75.75 0 0 1 .75.75v2.75h2.5a.75.75 0 0 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75V5.5a.75.75 0 0 1 .75-.75Z"></path>
    </svg>
);

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30.44);

  if (days < 30) return `${days} days ago`;
  if (months < 12) return `${months} months ago`;
  return `${Math.floor(months / 12)} years ago`;
}

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={styles.reposSection}
      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0, filter: isInView ? "blur(0px)" : "blur(8px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className={styles.reposTitle}>My GitHub Projects</h2>
      <div className={styles.reposContainer}>
        {loading && <p className={styles.loadingText}>Loading repositories...</p>}
        {error && <p className={styles.errorText}>Error: {error}</p>}
        {!loading && !error && (
          repos.map(repo => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoCard}>
              <h3 className={styles.repoName}>{repo.name}</h3>
              <p className={styles.repoDescription}>{repo.description || 'No description available.'}</p>
              <div className={styles.repoMeta}>
                <span className={styles.metaItem}><StarIcon /> {repo.stargazers_count} stars</span>
                <span className={styles.metaItem}><ForkIcon /> {repo.forks_count} forks</span>
                <span className={styles.metaItem}><ClockIcon /> {formatDate(repo.pushed_at)}</span>
              </div>
            </a>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default GitHubRepos;