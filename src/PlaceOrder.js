const PlaceOrder = () => {
    return ( 
        <div className="PlaceOrder">
            <form action="">
                <label htmlFor="">Full Name :</label><br />
                <input type="text" name="fname" /><br />
                <label htmlFor="">Address : </label><br />
                <textarea name="Address" id="" cols="10" rows="5"></textarea><br />
                <label htmlFor="">Province :</label>
            </form>
        </div>
     );
}
 
export default PlaceOrder;