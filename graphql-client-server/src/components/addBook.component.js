import {Formik, Field, Form} from 'formik';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { useState } from 'react';

const AddBook = () => {

    const response1 = useQuery(getAuthorsQuery);
    const response2 = useQuery(addBookMutation);

    const displayAuthors = (data) => {
        if(response1.loading) return <option disabled>Loading Authors...</option>;
        else if (response1.error) return <p>Couldn't load the Authors</p>;
        else{
            return data.authors.map(author =>{
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            });
        }
    }
    const [book, setBook] = useState([]);
    return (
        <>
            <Formik
            initialValues={{
                book_name:'',
                genre:'',
                author:''
            }}
            onSubmit={(values,actions) => {
                setBook((prevState) => (values));
                actions.setSubmitting(false);
              
            }}
        >
            {formikProps => (
                <Form onSubmit={formikProps.handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="book_name">Book name <span className="text-danger">*</span></label>
                        <Field
                        className="form-control"
                        type="text"
                        id="book_name"
                        name="book_name"
                        />
                        {/*<div className="invalid-feedback d-block"><ErrorMessage name="email"/></div>*/}
                    </div>

                    <div className="form-group">    
                        <label className="form-label" htmlFor="genre">Genre <span className="text-danger">*</span></label>
                        <Field
                            className="form-control"
                            type="genre" 
                            id="genre"
                            name="genre"
                        />
                        {/*<div className="invalid-feedback d-block"><ErrorMessage name="password"/></div>*/}

                    </div>
                    <div className="form-group">    
                        <label className="form-label" htmlFor="author"> <span className="text-danger">*</span></label>
                        <Field as="select" name="author">
                            {displayAuthors(response1.data)}
                        </Field>

                        {/*<div className="invalid-feedback d-block"><ErrorMessage name="password"/></div>*/}

                    </div>
                    <button type="submit" className="btn btn-primary">+</button>
            
                </Form>
            )
                
            }
        
            </Formik>    
        </>
    )
}

export default AddBook;