import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export const openDb = () => open({
  filename: './local.db',
  driver: sqlite3.Database
})