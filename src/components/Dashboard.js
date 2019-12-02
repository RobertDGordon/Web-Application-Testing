import React from 'react'



const Dashboard = props => {
    const handleClick = (e) =>{
        e.preventDefault()
        props.addCount(e.target.dataset.txt)

    }
    return(
        <>
        <button onClick={handleClick} data-txt='ball'>Ball</button>
        <button onClick={handleClick} data-txt='strike'>Strike</button>
        <button onClick={handleClick} data-txt='foul'>Foul</button>
        <button onClick={handleClick} data-txt='hit'>Hit</button>
        </>
    )
}

export default Dashboard;