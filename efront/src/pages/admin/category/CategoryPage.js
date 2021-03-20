import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { getCategories, deleteCategory } from '../../../utils/CategoryUtils'
import { LinkContainer } from 'react-router-bootstrap'

import { toast } from 'react-toastify';

const CategoryPage = ({ history }) => {
    const [categories, setCategories] = useState([])

    const loadCategories = () => getCategories().then(c => setCategories(c.data))

    useEffect(() => {
        loadCategories()
    }, [])


    const addProductPage = () => {
        history.push('/category/new')
    }

    const handleRemove = (id) => {
        deleteCategory(id)
            .then(res => {
                console.log(res)
                toast.success("Category deleted successfully!")
                loadCategories()
            })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Catégories</h1>
                </Col>
                <Col className="text-right">
                    <Button onClick={addProductPage} className="my-3">
                        <i className="fas fa-plus"></i> Ajouter un produit
                    </Button>
                </Col>
            </Row>
            <Table
                striped
                bordered
                hover
                responsive
                className='table-sm'
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {categories.map(category => (
                        <tr key={category._id}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                            <td>
                                <LinkContainer
                                    to={`/admin/category/${category._id}`}
                                >
                                    <Button
                                        variant='light'
                                        className='btn-sm'
                                    >
                                        <i
                                            className='fas fa-edit'
                                        >
                                        </i>
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant='danger'
                                    className='btn-sm'
                                    onClick={() => handleRemove(`${category._id}`)}
                                >
                                    <i
                                        className='fas fa-trash'
                                    >
                                    </i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </Container>
    )
}

export default CategoryPage
