import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

const ViewModal = ({ isOpen, onClose, data }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>View Sale Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>ID: {data.id}</p>
                    <p>Customer Name: {data.customerName}</p>
                    <p>Price: {data.price}</p>
                    <p>Last Modification: {data.lastModification}</p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ViewModal;
