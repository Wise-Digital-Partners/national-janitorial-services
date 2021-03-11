import React, { Component } from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro'

import ButtonSolid from '../Button/ButtonSolid';
// import Submit from '../../images/global/Submit.svg';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const StyledForm = styled.div`
  form {
    ${tw`flex flex-no-wrap`}
    @media (max-width: 959px){
		${tw`mx-auto max-w-md`}
    }
  }
  .field {
	${tw`w-full`}
  }
  label {
    ${tw`hidden`}
  }
  input {
    ${tw`w-full p-4 h-12 rounded-tl-md rounded-bl-md`}
  }
  button {
	${tw`p-0 w-12 h-12 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none flex items-center justify-center`}
	min-width: 48px !important;
  }
  .ajax-response {
	${tw`text-white text-opacity-70`}
  }
`
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
    .then(() =>
      document.getElementById('newsletter-form-ajax-response').innerHTML = "Thank you for subscribing!",
      form.remove(),
      window.dataLayer = window.dataLayer || [],
      window.dataLayer.push({
        'event': 'newsletterFormSubmission'
      })  
    )
    .catch(error => alert(error))  

  }
  
  render() { 
    return (
      <StyledForm>
        <div id="newsletter-form-ajax-response" className="ajax-response"></div>
		<p className="text-white text-opacity-70 leading-none mb-7">Join our email list for the latest events, classes, and sales.</p>
        <form
        name="Newsletter"
        method="post"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="Newsletter" />
        <div hidden>
            <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onBlur={this.handleChange} />
            </label>
        </div>
         
        <div className="field">
            <label className="label" htmlFor={'email'}>Email</label>
            <div className="control">
            <input
                className="input"
                type={'email'}
                name={'email'}
                onBlur={this.handleChange}
                id={'email'}
                required={true}
            />
            </div>
        </div>
        {/* <ButtonSolid as="button" type="submit" text={<img src={Submit} alt="Submit" />}/> */}
        <ButtonSolid as="button" type="submit" text="Submit" alt="Submit" />}/>
        </form>
      </StyledForm>
    );
  }
}