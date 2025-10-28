//get all users
const getAllUsers =(req, res) =>{
    const users = [
        {name:"Jon Doe", id: 1},
        {name:"Jane Doe", id: 2},
        {name:"Job Doe", id: 3},
    ];
    res.json({
        message: "Users retrieved successfully",
        users: users
    });
}

// module.exports = {getAllUsers};
export default {getAllUsers};