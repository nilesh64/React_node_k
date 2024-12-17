import React from 'react'

const ContactComponents = (props) => {
  return (
<>
    {props.Contact.map((contact) => (
        <div className="w-16 h-28 bg-slate-300 m-3">
      <div className="p-1 px-3 rounded-full">
        <img className="w-10 h-10 rounded-full" src={contact.pic} alt="img.jpg"></img>
      </div>
      <div className="px-3 text-[0.3rem] font-normal ">
        <h1 className="pb-[0.1rem] font-bold">{contact.name}</h1>
        <h2 className="pb-[0.1rem] ">{contact.phone}</h2>
        <h3 className="pb-[0.1rem] font-semibold">{contact.email}</h3>
      </div>
        <a  className="  text-[0.5rem]  mx-3 p-1 rounded-xl bg-black text-white" href="https://github.com/nilesh64/React_node_k">Contact</a>
    </div> 
   )) }
</>
  )
}

export default ContactComponents
