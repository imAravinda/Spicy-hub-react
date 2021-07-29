import imgc from './images/cover4.jpg'
const Contact = () => {
    return ( 
        <div className="contact">
            <h1>Spicy Hut</h1>
            <hr />
            <img src={imgc} alt="" />
            <div className="secRow">
                <div className="left-con">
                    <h2>Opening Hours</h2>
                    <p>Monday to Friday - 9am to 9pm</p>
                    <p>Saturday and Sunday - 9am to 9pm</p>
                </div>
                <div className="right-con">
                    <h2>Get In Touch</h2>
                    <p>No. 203A, Galle Road, Ratmalana,</p>
                    <p>example@gmail.com</p>
                    <p>+94 716051474</p>
                </div>
            </div>
        </div>
     );
}
 
export default Contact; 