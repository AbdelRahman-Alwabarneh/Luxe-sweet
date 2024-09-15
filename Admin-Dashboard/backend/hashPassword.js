const bcrypt = require('bcryptjs');

async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  console.log('Hashed Password:', hashedPassword);
}

hashPassword('0782744028').catch(console.error);
