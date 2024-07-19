import proptyps from 'prop-types'
function PriceCard(props){
    return(
        <div className="OuterBox">

            <div className="InnerBox1">
                <p>{props.tiear}</p>
                <h1>₹{props.price}/Month</h1>
            </div>

            <div className="InnerBox2">
              <p>{props.one ?"✓":"✖" } Unlimited account user</p>
              <p>{props.two ?"✓":"✖" } Custom domain support</p>
              <p>{props.three ?"✓":"✖" } Registration transfers</p>
              <p>{props.four ?"✓":"✖" } Email notification</p>
              <p>{props.five ?"✓":"✖" } Group discount</p>
              <p>{props.six?"✓":"✖" } Speaker management</p>
              <p>{props.seven ?"✓":"✖" } Standard REST API</p>
              <p>{props.eight ?"✓":"✖" } Email support</p>
            </div>

            <button className="btn">Subsribe</button>

        </div>
    )
}
PriceCard.prototype={
    tiear: proptyps.array,
    price: proptyps.number,
    one: proptyps.bool,
    two: proptyps.bool, 
    three: proptyps.bool,
    four: proptyps.bool,
    five: proptyps.bool,
    six: proptyps.bool,
    seven: proptyps.bool,
    eight: proptyps.bool,
}

export default PriceCard