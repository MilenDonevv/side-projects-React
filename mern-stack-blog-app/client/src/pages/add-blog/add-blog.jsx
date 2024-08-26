import { useContext } from 'react';
import classes from './styles.module.css';
import { GlobalContext } from '../../context/context';
import axios from 'axios';

export default function AddNewBlog() {

    const { formData, setFormData } = useContext(GlobalContext);

    console.log(formData);

    async function handleSaveBlogToDatabase() {
        try {
            const response = await axios.post('http://localhost:5000/api/blogs/add', {
                title: formData.title,
                description: formData.description
            });

            const result = response.data;
            console.log(result);
        } catch (error) {
            console.error("There was an error saving the blog:", error);
        }
    }

    return (
        <div className={classes.wrapper}>
            <h1>Add a blog</h1>
            <div className={classes.formWrapper}>
                <input 
                    name='title'
                    placeholder='Enter Blog Title'
                    id='title'
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({
                        ...formData,
                        title: e.target.value
                    })}
                />

                <textarea 
                    name='description'
                    placeholder='Enter Blog Description'
                    id='description'
                    value={formData.description}
                    onChange={(event) => setFormData({
                        ...formData,
                        description: event.target.value
                    })}
                />

                <button onClick={handleSaveBlogToDatabase}>Add New Blog</button>
            </div>
        </div>
    );
}
