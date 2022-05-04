import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { openDb } from '~/libs/db'

export default async (req, res) => {
  if (req.method != 'POST') {
    return res.status(404).json('Route not found')
  }

  const db = await openDb()
  const { username, password } = req.body
  const row = await db.get('select id, password from user where username = ?', [username])
  if (!row || !(await bcrypt.compare(password, row.password))) {
    return res.status(401).json('Invalid username or password')
  }

  res.status(200).json({
    token: jwt.sign(
      { username },
      process.env.SECRET_PHRASE
    )
  })
}