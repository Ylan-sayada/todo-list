import React from 'react';
import Form from 'react-bootstrap/Form';
import "./SearchAndSort.scss";
export default function SearchAndSort(props) {


    return (
        <div className="search-and-sort">
            <div className="container">
                <div className="sort-div">
                    <label htmlFor="sortBy">Display task by : </label>
                    <Form.Select onChange={(e) => props.sortBy(e.target.value)} name="sortBy" id="sortBy" size="sm">
                        <option value="latest">Latest</option>
                        <option value="importance">Importance</option>
                        <option value="oldest">Oldest</option>
                    </Form.Select>

                </div>
                <div className="search-div">
                    <label htmlFor="searchTask">Search a Task :</label>
                    <Form.Control onChange={(e) => props.search(e.target.value)} type="text" placeholder="Task name to search" />
                </div>
            </div>


        </div>
    )
}
