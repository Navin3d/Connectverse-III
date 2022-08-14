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
            <label for="phone">Required worker<span>*</span></label>
            <input id="phone" type="text"   name="phone" required/>
          </div>



          </div>





        <div className="row">

            
<div className="col">
            <div className="space-2"></div>

<div className="row">
<div class="question">

<label>Work Started .</label>

<div class="question-answer">

  <div>
    <input  type="radio" value="none" id="radio_2" name="type"/>
    <label for="radio_2" class="radio"><span>Yes</span></label>
  </div>
  <div>
    <input  type="radio" value="none" id="radio_3" name="type"/>
    <label for="radio_3" class="radio"><span>No</span></label>
  </div>
</div>
</div>
</div>
</div>

<div className="col">
            <div className="space-2"></div>

<div className="row">
<div class="question">

<label>Driving liscence .</label>

<div class="question-answer">

  <div>
    <input  type="radio" value="none" id="radio_2" name="type"/>
    <label for="radio_2" class="radio"><span>Yes</span></label>
  </div>
  <div>
    <input  type="radio" value="none" id="radio_3" name="type"/>
    <label for="radio_3" class="radio"><span>No</span></label>
  </div>
</div>
</div>
</div>
</div>









<div className="col">
            <div className="space-2"></div>

<div className="row">
<div class="question">



<div class="question-answer">
<label className='downwards'>Vehicle Wanted .</label>
  <div>
    <input  type="radio" value="none" id="radio_2" name="type"/>
    <label for="radio_2" class="radio"><span>Yes</span></label>
  </div>
  <div>
    <input  type="radio" value="none" id="radio_3" name="type"/>
    <label for="radio_3" class="radio"><span>No</span></label>
  </div>
</div>
</div>
</div>
</div>



</div>

<div className="row">
<div className="col">

<div className="space-2"></div>
    <div class="dropdown-1">
      <button class="btn btn-secondary dropdown-toggle id" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Skills
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Java</a></li>
        <li><a class="dropdown-item" href="#">c</a></li>
        <li><a class="dropdown-item" href="#">Python</a></li>
      </ul>
    </div>

    </div>


    <div className="col">

<div className="space-2"></div>
    <div class="dropdown-1">
      <button class="btn btn-secondary dropdown-toggle id" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Job Type
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">farming</a></li>
        <li><a class="dropdown-item" href="#">construction</a></li>
        <li><a class="dropdown-item" href="#">food supply</a></li>
      </ul>
    </div>

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