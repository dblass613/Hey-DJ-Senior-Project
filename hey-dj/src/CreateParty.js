import React from 'react';
import ReactDOM from 'react-dom';

const CreateParty = () =>
    <div className="container d-flex align-items-center flex-column">
        <h1 className="mb-5">Join a Party</h1>
        <form className="d-flex flex-column align-items-center">
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party Name" />
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party End Date" />
            <input type="text" name="" className="form-control create-account-text mb-4" placeholder="Party ID" />
            <button type="button" name="" className="create-account-button my-4">Create Party!</button>
        </form>
    </div>
export default CreateParty;
