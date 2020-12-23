import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
          <div className={styles.page}>
          <h1>this is our blog page</h1>  
          <p className={styles.text}>
            kdshfjkbsdjhdbfgjkdfbgjbdfjkgbjklsdfbglbsfg fgbsdjbjb sdfghbjsdh  bhbbfjksdf gdfsb gjkhbsdfgb sfhjbs shjfgb jksf dghsbfghjssdhjkvbsdhbgks hsbfgjh sfhjg hjksdfbgsfhgjbskhfdgb 
          </p>
          </div>
        </Layout>
    )
}

export default blog