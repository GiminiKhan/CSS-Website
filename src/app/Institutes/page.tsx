import React from 'react'

const Institutes = () => {

  const instituteData =[
    {id: 1, name:'Shah Latif Boys School', area: 'Steel Town', description: 'Only Boys Secondary School', image: '/slbss1.png'},
    {id: 2, name:'Allama Iqbal Girls School', area: 'Steel Town', description: 'Only Girls Secondary School', image: '/AIGSS.png'},
    {id: 3, name:' Mader-e-Millat Girls Degree College', area: 'Steel Town', description: 'Only Girls Degree College', image: '/MMDC-1.png'},
  ]
  return (
    <div>
      <div className= "schools">
        {instituteData.map((school) => (
          <div key={school.id} className= "school-card">
<img src={school.image} alt={school.name}/>
    <h3 className="fade-in">{school.name}</h3>
    <p>{school.description}</p>
    <div className= "area">{school.area}</div>
    <button className= "fade-in">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Institutes
