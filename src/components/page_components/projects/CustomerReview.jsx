import React from 'react'
import '../../../css/customer-review.css'

class CustomerReview extends React.Component{

    render(){

        return (

            <article className={"customer"}>
                <header style={{display: 'flex', alignItems: 'center'}}>
                    <img src={require("../../../images/customer.png")} className={"customer"}/>
                    <h2>Customer Name</h2>
                </header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat quam at ornare
                    lobortis. Morbi mollis neque et mi posuere porta. Morbi mollis facilisis elementum. Proin non
                    orci urna. Nulla non augue orci. Vestibulum imperdiet venenatis tortor, nec eleifend mauris
                    rhoncus quis.</p>
            </article>

        )

    }

}

export default CustomerReview;