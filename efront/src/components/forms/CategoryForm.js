import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const CategoryForm = ({ name, setName, save = 'Ajouter', handleSubmit }) => {
    useEffect(() => {
        //  
    }, [])

    return (
        <Container>
            <form className="mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Catégorie</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{save}</button>
            </form>
        </Container>
    )
}

export default CategoryForm
