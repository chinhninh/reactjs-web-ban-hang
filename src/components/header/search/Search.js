import React, { Component, useState } from 'react';
import './Search.scss';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

     handleClose = () =>{ 
         this.setState({show:false});
        }

     handleShow = () =>{ 
         this.setState({show:true});
        }

    render() {
        
        

        return (
            <div className="search">
                <a className="btn" onClick={this.handleShow}>
                    <i><FaSearch /></i>
                    <span>Search</span>
                </a>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Search</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input className="input-search" placeholder="search..."/>
                        </Modal.Body>
                        <Modal.Footer>
                            <NavLink to="/search" className="btn submit" variant="primary" onClick={this.handleClose}>
                                Submit
                            </NavLink>
                        </Modal.Footer>
                    </Modal>
            </div>
        );
    }
}

export default Search;