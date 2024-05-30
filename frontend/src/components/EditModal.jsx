import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input } from '@chakra-ui/react';

const EditModal = ({ isOpen, onClose, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Sale Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input name="id" value={formData.id} onChange={handleChange} placeholder="ID" isReadOnly />
                    <Input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" mt={4} />
                    <Input name="price" value={formData.price} onChange={handleChange} placeholder="Price" mt={4} />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EditModal;
