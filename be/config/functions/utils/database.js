
async function findUser(username, room) {
    try {
        const userExists = await strapi.services.socket.find({ username, room });
        return userExists;
    } catch(err) {
        console.log("error while fetching", err);
    }
}

async function createUser({ username, room, status, socketId }) {
    try {
        const user = await strapi.services.socket.create({
            username,
            room,
            status: status,    
            socketId        
        });
        return user;
    } catch(err) {
        console.log(err)
    }
}
async function chattingSave(message, room, username) {
    try {        
        strapi.services.chat.create({
            text: message,
            room: room,
            user:username
        });      
    } catch(err) {
        console.log(err)
    }
}
async function userExists(id) {
    try {
        const user = strapi.services.socket.findOne({ id: id });
        return user;
    } catch(err) {
        console.log("Error occured when fetching user", err);
    }
}
async function getUsersInRoom(room) {
    try {
        const usersInRoom = await strapi.services.socket.find({ room })
        return usersInRoom;
    } catch(err) {
        console.log("Error.Try again!", err);
    }
}
async function getUsersText(room) {
    try {
        const usersText = await strapi.services.chat.find({room})
        return usersText;
    } catch(err) {
        console.log("Error.Try again!", err);
    }
}
async function deleteUser(socketId) {
    try {
        console.log(socketId)
        const user = await strapi.services.socket.delete({ socketId: socketId });
        return user;
    } catch(err) {
        console.log("Error while deleting the User", err);
    }
}
module.exports = {
    findUser,
    createUser,
    userExists,
    getUsersInRoom,
    getUsersText,
    deleteUser,
    chattingSave,    
}