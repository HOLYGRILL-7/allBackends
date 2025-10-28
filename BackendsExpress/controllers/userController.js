//get all users
const getAllUsers = (req, res) =>{
    const users = [
        {name: "Jon Doe", id:1,},
        {name: "Jane Doe", id:2,},
        {name: "Janet Doe", id: 3}
    ]

    //show the users to the client
    res.json({
        message: 'Users retrieved succesfully',
        users: users
    })
}

module.exports = {getAllUsers};