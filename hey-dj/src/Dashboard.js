import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/dashboard.css';
import Logo from './Images/HeyDJLogoWhite.png';

function Dash(props) {
    return (
        <div class="container d-flex align-items-center flex-column">
            <h1 class="my-3">My Parties</h1>
            <div class="table-responsive my-3">
                <table class="table table-dark table-bordered table-hover">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Party Name</th>
                            <th scope="col">Date End</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>BDay Party</td>
                            <td>Some Date</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Anniversary</td>
                            <td>Some Date</td>
                            <td>Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 class="my-3">Joined Parties</h1>
            <div class="table-responsive my-3">
                <table class="table table-dark table-bordered table-hover">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Party Name</th>
                            <th scope="col">Date End</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>BDay Party</td>
                            <td>Some Date</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Anniversary</td>
                            <td>Some Date</td>
                            <td>Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

const Dashboard = (props) =>
    Dash(props);

export default Dashboard;
