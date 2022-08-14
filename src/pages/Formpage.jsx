import React from 'react'
import "../styles/pages/Formpage.css"

const Formpage = () => {
  return (
    <div>
          <div className='full-form'>
          <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>Form page</h1>
        </div>
        <div class="colums">
          <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" required/>
          </div>
          <div class="item">
            <label for="lname"> Last Name<span>*</span></label>
            <input id="lname" type="text" name="lname" required/>
          </div>
          <div class="item">
            <label for="address1">Address 1<span>*</span></label>
            <input id="address1" type="text"   name="address1" required/>
          </div>
          <div class="item">
            <label for="address2">Address 2<span>*</span></label>
            <input id="address2" type="text"   name="address2" required/>
          </div>
          <div class="item">
            <label for="state">State<span>*</span></label>
            <input id="state" type="text"   name="state" required/>
          </div>
          <div class="item">
            <label for="zip">Zip/Postal Code<span>*</span></label>
            <input id="zip" type="text" name="zip" required/>
          </div>
          <div class="item">
            <label for="city">City<span>*</span></label>
            <input id="city" type="text"   name="city" required/>
          </div>
          <div class="item">
            <label for="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text"   name="eaddress" required/>
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel"   name="phone" required/>
          </div>
        </div>
        <div className="row">
        <div class="question">
        
          <label>Membership Type .</label>
         
          <div class="question-answer">
          
            <div>
              <input  type="radio" value="none" id="radio_2" name="type"/>
              <label for="radio_2" class="radio"><span>Premium</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_3" name="type"/>
              <label for="radio_3" class="radio"><span>Ultimate</span></label>
            </div>
          </div>
        </div>
        </div>
       
        <div className="space-1"></div>
        <h2 className='terms-condition'>Terms and Conditions</h2>
        <input type="checkbox" name="checkbox1"/>
        <label>You consent to receive communications from us electronically. We will communicate with you by e-mail or phone. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</label>
        <div class="btn-block">
          <div className="space"></div>
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
          </div>

    </div>
  )
}

export default Formpage