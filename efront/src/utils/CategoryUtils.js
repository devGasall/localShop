import axios from 'axios'

export const getCategories = async () =>
    await axios.get(`${process.env.REACT_APP_API}/categories`)

export const createCategory = async (category) =>
    await axios.post(`${process.env.REACT_APP_API}/category/create`,
        category
    )

export const getCategory = async (id) =>
    await axios.get(`${process.env.REACT_APP_API}/category/${id}`)

export const updateCategory = async (id, category) =>
    await axios.put(`${process.env.REACT_APP_API}/category/${id}`,
        category
    )


export const deleteCategory = async (id) =>
    await axios.delete(`${process.env.REACT_APP_API}/category/${id}`)