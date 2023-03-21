import React from 'react';
import './App.css';

const App = () => {
  const [otpShow, setOtpShow] = React.useState(false);
  const [btnHide, setBtnHide] = React.useState(false);
  const [validMob, setValidMob] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [pan, setPan] = React.useState('');

  const [email, setEmail] = React.useState('');

  const hadleClick = (e) => {
    if (name === '' || city === '' || email === '' || validMob === '' || pan === '') {
      setMsg('All Fields are required');
      setBtnHide(false);
      setOtpShow(false);
    }
    else if (validMob.length !== 10 ) {
      setMsg('Enter Valid Mobile Number');
      setBtnHide(false);
      setOtpShow(false);
    }else if (pan.length !== 10  ) {
      setMsg('Enter Valid Pan Number');
      setBtnHide(false);
      setOtpShow(false);
    }
    else {
      setMsg('OTP sent Successfully!');
      setOtpShow(true);
      setBtnHide(true);
    }

  }
  return (
    <div className='parent'>
      <div className="App">
        <h1>Form Validation</h1>
        <div className='main'>
          <label className='label'>Full Name</label>
          <input onChange={(e) => setName(e.target.value)} className='user' type="text" />
        </div>
        <div className='main'>
          <label className='label'>City</label>
          <input onChange={(e) => setCity(e.target.value)} className='user' type="text" />
        </div>
        <div className='main'>
          <label className='label'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className='email' type="email" />
        </div>
        <div className='main'>
          <label className='label'>Pan No (e.g - BIGPJ7107J )</label>
          <input style={{textTransform:'uppercase'}} onChange={(e) => setPan(e.target.value)} className='user' type="text" />
        </div>
        <div className='main'>
          <label className='label'>Mobile </label>
          <input onChange={(e) => setValidMob(e.target.value)} className='user' type="number" placeholder='Enter 10 - Digit Mobile No'/>
        </div>

        <div className='button'>
          <button className='btn' disabled={btnHide === true ? btnHide : null} onClick={(e)=>hadleClick(e)}>Submit</button>
          <p className='msg'>{msg && msg}</p>
          {otpShow &&
            <div className='otp'>
              <div>
                <label htmlFor="">Enter 4-Digit OTP : </label>
                <input className='verifyInput' type="text" maxLength={4} pattern="^0[1-9]|[1-9]\d$" required />
                <button className='verify'>Verify Now</button>
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default App;

