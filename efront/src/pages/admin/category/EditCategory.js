import React, { useCallback, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CategoryForm from '../../../components/forms/CategoryForm'
import { getCategory, updateCategory } from '../../../utils/CategoryUtils'

import { toast } from 'react-toastify';


const EditCategory = ({ history, match }) => {

    const [name, setName] = useState('')

    const loadCategory = useCallback(() => getCategory(match.params.id)
        .then((c) => setName(c.data.name)), [match.params.id])

    useEffect(() => {
        loadCategory()
    }, [loadCategory])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name)
        updateCategory(match.params.id, { name })
            .then(res => {
                console.log(res)
                toast.success("Category updated successfully!")
                history.push('/admin/categories')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <CategoryForm save="Modifier" name={name} setName={setName} handleSubmit={handleSubmit} />
        </Container>
    )
}

export default EditCategory
