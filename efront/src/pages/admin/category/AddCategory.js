import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CategoryForm from '../../../components/forms/CategoryForm'
import { createCategory } from '../../../utils/CategoryUtils'

const AddCategory = ({ history }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name)
        createCategory({ name })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setName('')
        history.push('/')
    }
    return (
        <Container>
            <CategoryForm name={name} setName={setName} handleSubmit={handleSubmit} />
        </Container>
    )
}

export default AddCategory
