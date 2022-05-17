import React from 'react'

export default function Userdata({data}) {
  const HandleChange = (e) => {
   e.preventDefault();
  }
  return (
    <>
      <h1 className='heading_style'>Fetching User's Data</h1>
      <div className="cards">
          {
              data.map((elem) => {
                  return(
                    <form onSubmit={HandleChange}>
                    <div className="card" key={elem.id}>
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${elem.username}.svg?options[mood][]=happy`} alt="" className='card_img'/>
                    <div className="card_info">
                        <h3 className='card_title'>{elem.name}</h3>
                             <ul>
                                 <li><strong>Username : </strong>{elem.username}</li>
                                 <li><strong>Email: </strong>{elem.email}</li>
                                 <li><strong>Address: </strong>{`${elem.address.street}, ${elem.address.suite}, ${elem.address.city}, ${elem.address.zipcode}`}</li>
                                 <li><strong>Mobile No. : </strong>{elem.phone}</li>
                             </ul>
                    </div>
                    <div className='button'>
                    <button type="edit" className='f'>Edit</button>
                    <button type="delete" className='f'>X</button>
                    </div>
                </div>
                </form>
                  )
              })
          }
        </div>
    </>
  )
}
