import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { logo2 } from '../assets';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      telephone: "",
      country: "",
      companyName: "",
      website: "",
      jobTitle: "",
      software: "",
    });
  
    const [emailSent, setEmailSent] = useState(false);
    const [message, setMessage] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .send("service_1mqleba", "webPageMessage", formData, "5irujdBHzvTm6UJZp")
        .then(
          (result) => {
            console.log(result.text);
            setEmailSent(true);
            setMessage("Your email was sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              description: "",
              telephone: "",
              country: "",
              companyName: "",
              website: "",
              jobTitle: "",
              software: "",
            });
          },
          (error) => {
            console.log(error.text);
            setEmailSent(false);
            setMessage("Failed to send email. Please try again.");
          }
        );
    };
  

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-black-100">
    {/* Image above the form */}
    <div className="flex flex-col items-center">
      <img src={logo2} alt="Descriptive Alt Text" className="mb-1 w-[200px] h-[150px]" /> {/* Replace with your image path and alt text */}
    <form className="w-full max-w-lg bg-white bg-opacity-40 p-5 mb-10 rounded" id="myForm" onSubmit={sendEmail}>
      {/* First Name and Last Name */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input onChange={handleChange} name="firstName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input onChange={handleChange} name="lastName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>
  
      {/* Email */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input onChange={handleChange} name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="email@example.com" />
        </div>
      </div>
  
      {/* Description */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-description">
            Description
          </label>
          <textarea onChange={handleChange} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-description" placeholder="Your message" rows="4"></textarea>
        </div>
      </div>
  
      {/* Telephone, Country, Company Name */}
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Telephone */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-telephone">
            Telephone
          </label>
          <input onChange={handleChange} name="telephone" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-telephone" type="text" placeholder="+123456789" />
        </div>
        {/* Country */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-country">
            Country
          </label>
          <input onChange={handleChange} name="country" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-country" type="text" placeholder="Country" />
        </div>
        {/* Company Name */}
        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-company-name">
            Company Name
          </label>
          <input onChange={handleChange} name="companyName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-company-name" type="text" placeholder="Company Name" />
        </div>
      </div>
  
      {/* Website and Job Title */}
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Website */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-website">
            Website
          </label>
          <input onChange={handleChange} name="website" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-website" type="text" placeholder="https://example.com" />
        </div>
        {/* Job Title */}
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-job-title">
            Job Title
          </label>
          <input onChange={handleChange} name="jobTitle" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-job-title" type="text" placeholder="Job Title" />
        </div>
      </div>
  
      {/* Software Picker */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gradient text-xs font-bold mb-2" htmlFor="grid-software">
            Main Software
          </label>
          <select onChange={handleChange} name="software" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-software">
            <option>QuickBooks</option>
            <option>Xero</option>
            <option>Sage</option>
            <option>Wave</option>
          </select>
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
        <button type="submit" className="shadow bg-white hover:bg-blue-190 text-black focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded">
              Contact!
        </button>
        </div>
      </div>
      {emailSent && (
        <p className="text-center text-gradient font-bold italic text-sm pt-2 mr-6">{message}</p>
        )}
        {!emailSent && (
        <p className="text-center text-red-600 font-bold italic text-sm pt-2 ml-2 mr-6">{message}</p>
       )}
    </form>
    </div>
    {/* <Footer/> */}
  </div>
    
  );
};

export default ContactForm;
