const bcrypt = require('bcrypt')

const hashPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

const comparePassword = async(enteredPassword, savedPassword) => {
    return await bcrypt.compare(enteredPassword, savedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}