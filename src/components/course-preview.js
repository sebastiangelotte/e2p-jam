import React from 'react'

import styles from './article-preview.module.css'

export default ({ course }) => (
    <div className={styles.preview}>
        {course.title}
        <button>BUY</button>
    </div>
)
