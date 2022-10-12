import React from "react";
import Card from "./Card";
import Button from './Button';
import styles from './ErrorHandler.module.css';

const ErrorHandler = props => {
     return (
          <div className={styles.backdrop} onClick={props.errorHandler}>
               <Card className={styles.modal}>
                    <header className={styles.header}>
                         <h2>{props.title}</h2>
                    </header>
                    <div className={styles.content}>
                         <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                         <Button onClick={props.errorHandler}>Okay</Button>
                    </footer>
               </Card>
          </div>
     )

}

export default ErrorHandler;