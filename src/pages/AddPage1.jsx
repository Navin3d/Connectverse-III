import React from 'react'
import "../styles/pages/Formpage.css"

const Formpage = () => {
  return (
    <div>
          <div className='full-form'>
          <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>Job Detail Page</h1>
        </div>
        <div class="colums">
          <div class="item">
            <label for="fname"> Id<span>*</span></label>
            <input id="fname" type="text" name="fname" required/>
          </div>
          <div class="item">
            <label for="lname"> Title<span>*</span></label>
            <input id="lname" type="text" name="lname" required/>
          </div>
          <div class="item">
            <label for="address1">Description<span>*</span></label>
            <input id="address1" type="text"   name="address1" required/>
          </div>
          <div class="item">
            <label for="address2">No of Days<span>*</span></label>
            <input id="address2" type="number"   name="address2" required/>
          </div>
          <div class="item">
            <label for="state">Work hours per day<span>*</span></label>
            <input id="state" type="number"   name="state" required/>
          </div>
          <div class="item">
            <label for="zip">Pay per day<span>*</span></label>
            <input id="zip" type="number" name="zip" required/>
          </div>
          <div class="item">
            <label for="city">Location<span>*</span></label>
            <input id="city" type="text"   name="city" required/>
          </div>
          <div class="item">
            <label for="eaddress">State<span>*</span></label>
            <input id="eaddress" type="text"   name="eaddress" required/>
          </div>
          <div class="item">
            <label for="phone">JobType<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">Driving license<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">Vechicle wanted<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">Required worker<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">Workstarted<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">Skills Id<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>
          <div class="item">
            <label for="phone">EmployeeId<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>

        </div>
  
       
        <div className="space"></div>
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