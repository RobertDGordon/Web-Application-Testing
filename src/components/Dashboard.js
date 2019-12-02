import React from 'react'



const Dashboard = props => {
    const handleClick = (e) =>{
        console.log(e.target.dataset.txt)
        e.preventDefault()
        props.addCount(e.target.dataset.txt)

    }
    return(
        <>
        <button onClick={handleClick} data-txt='ball'>Ball</button>
        </>
    )
}

export default Dashboard;