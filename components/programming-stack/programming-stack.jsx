import React from 'react';
import Styles from '../../components/programming-stack.module.css';
import Divider from '../divider/divider';

const ProgrammingStack = () => {
  return (
    <section>
      <h1>Programming Stack</h1>
      <Divider />
      <div className={Styles.programming_stacks}>
        <span className={Styles.programming_stack__item}>JavaScript</span>
        <span className={Styles.programming_stack__item}>Java</span>
        <span className={Styles.programming_stack__item}>NodeJs</span>
        <span className={Styles.programming_stack__item}>Spring</span>
        <span className={Styles.programming_stack__item}>ReactJs</span>
        <span className={Styles.programming_stack__item}>Redux</span>
        <span className={Styles.programming_stack__item}>NextJs</span>
        <span className={Styles.programming_stack__item}>ExpressJs</span>
        <span className={Styles.programming_stack__item}>AdonisJs</span>
        <span className={Styles.programming_stack__item}>HTML5</span>
        <span className={Styles.programming_stack__item}>CSS3</span>
        <span className={Styles.programming_stack__item}>REST APIs</span>
        <span className={Styles.programming_stack__item}>Figma</span>
        <span className={Styles.programming_stack__item}>AWS</span>
        <span className={Styles.programming_stack__item}>Npm</span>
        <span className={Styles.programming_stack__item}>Yarn</span>
        <span className={Styles.programming_stack__item}>Gulp</span>
        <span className={Styles.programming_stack__item}>Git</span>
        <span className={Styles.programming_stack__item}>DevOps</span>
        <span className={Styles.programming_stack__item}>Relational Databases</span>
        <span className={Styles.programming_stack__item}>Non-Relational Databases</span>
      </div>
    </section>
  )
}

export default ProgrammingStack
