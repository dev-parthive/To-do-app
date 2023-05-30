export  const setAuthToken = user =>{
    const currentUser = {
        email: user.email
    }
    //save user in db and get token
    fetch(`${process.env.REACT_APP_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': "application/json"
        }, 
        body: JSON.stringify(currentUser)
    })
    
}