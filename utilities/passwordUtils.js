const bcrypt = require('bcrypt')

/**
 * @function    hashPassword 
 * @desc        Hashed a plain text password
 * @param       {String} password - Plain text password
 * @returns     {Promise<String>} Hashed password
 */
const hashPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

/**
 * @function    comparePassword 
 * @desc        Compares entered password against the stored hashed password
 * @param       {String} enteredPassword - Plain text password
 * @param       {String} savedPassword - Hashed password stored in DB
 * @returns     {Promise<Boolean>} Returns true if password matches, else false
 */
const comparePassword = async(enteredPassword, savedPassword) => {
    return await bcrypt.compare(enteredPassword, savedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}