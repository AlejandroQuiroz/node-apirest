import { pool } from '../db.js'

export const getAllUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users')
    
    if(rows.length === 0){
        return res.status(404).json({ status: 404, message: 'Users not found' })
    }

    res.status(200).json({ status: 200, data: rows })
}

export const getUserById = async (req, res) => {
    const { user_id } = req.params
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [user_id])

    if(rows.length === 0){
        return res.status(404).json({ status: 404, message: 'User not found' })
    }

    res.status(200).json({ status: 200, data: rows[0] })
}

export const createUser = async (req, res) => {
    try {
        const data = req.body
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [data.name, data.email])
        res.status(201).json({ status: 201, message: 'User created successfully', data_created: rows[0] })
    } catch (error) {
        if(error?.code === '23505'){
            return res.status(409).json({ status: 409, message: 'Email already exists' })
        }
        return res.status(500).json({ status: 500, message: 'Internal Server Error' })
    }
}

export const deleteUserById = async (req, res) => {
    const { user_id } = req.params
    const { rows, rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [user_id])

    if(rowCount.length === 0 || rows.length === 0){
        return res.status(404).json({ status: 404, message: 'User not found' })
    }

    res.status(200).json({ status: 200, message: 'User deleted successfully', data_deleted: rows[0] })
}

export const editUserById = async (req, res) => {
    try {
        const { user_id } = req.params
        const data = req.body

        const { rows, rowCount } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [data.name, data.email, user_id])
        
        if(rowCount.length === 0 || rows.length === 0){
            return res.status(404).json({ status: 404, message: 'User not found' })
        }

        res.status(200).json({ status: 200, message: 'User edited successfully', data_edited: rows[0] })
    } catch (error) {
        if(error?.code === '23505'){
            return res.status(409).json({ status: 409, message: 'Email already exists' })
        }
        return res.status(500).json({ status: 500, message: 'Internal Server Error' })
    }
}