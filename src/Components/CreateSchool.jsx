// src/components/SchoolForm.js
import { useState } from 'react';
import '../App.css';

function CreateSchool() {
    const [logo, setLogo] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleCreate = () => {
        // Handle create logic here
        console.log('Create School:', { logo, name, address, email, mobile });
    };

    const handleUpdate = () => {
        // Handle update logic here
        console.log('Update School:', { logo, name, address, email, mobile });
    };

    const handleDelete = () => {
        // Handle delete logic here
        console.log('Delete School:', { logo, name, address, email, mobile });
    };

    return (
        <div className="school-form-container">
            <form className="school-form">
                <h2>School Create</h2>
                <div className="form-group">
                    <label htmlFor="logo">School Logo URL</label>
                    <input
                        type="text"
                        id="logo"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">School Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">School Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">School Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">School Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required />
                </div>
                <div className="form-buttons">
                    <button type="button" onClick={handleCreate}>Create</button>
                    <button type="button" onClick={handleUpdate}>Update</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </div>
    );
}

export default CreateSchool;
