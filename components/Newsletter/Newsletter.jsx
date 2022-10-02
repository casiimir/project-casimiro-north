import "./index.module.scss";

const Newsletter = () => {
    return(
        <div >
                <h2>NEWSLETTER</h2>
                <h5>Take a 10% coupon subscribing to our Newsletter!</h5> 
                <form action="submit" >   
                    <div>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surame" />
                    </div>
                    <input type="text" placeholder="Email"  />
                    <button>Submit</button>
                </form>                    
                <img src="../assets/newsletter.png" alt="newsletter"/>
        </div>
    )
}



export default Newsletter;

