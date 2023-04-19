import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub ,FaFacebook,FaTwitter ,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className=''>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>

            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />  Instagram</ListGroup.Item>
                   
                </ListGroup>

            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;