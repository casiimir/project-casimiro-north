import styles from "./index.module.scss";

const Newsletter = () => {
    return(
        <div className={styles.newsletter}>
                <h2>NEWSLETTER</h2>
                <p>Take a <b className={styles.coupon}>10% coupon</b> subscribing to our Newsletter!</p> 
                <div className={styles.container}>
                <form action="submit" className={styles.form}>   
                    <div className={styles.fullname}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                    </div>
                    <input type="text" placeholder="Email"  className={styles.email}/>
                    <button>SUBMIT</button>
                </form>                    
                <img src="../assets/newsletter.png" alt="newsletter"/>
                </div>
        </div>
    )
}



export default Newsletter;

