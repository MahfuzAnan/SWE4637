import React, { useState, useRef } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            // Show modal
            setShowModal(true);
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done'>{notDone && "Please, fill all the input fields"}</span>
                        <Button type="submit" className="button">Send</Button>
                    </form>
                </Col>
            </Row>
            
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for contacting me. If you are testing this functionality, it is working perfectly fine. If you have any serious query, I will reply. Also, you can contact me on LinkedIn.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Contact;
