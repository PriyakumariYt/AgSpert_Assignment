import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { toast } from "react-toastify";

const SaleOrderModal = ({ isOpen, onClose, addData }) => {
    const [formData, setFormData] = useState({
        id: '',
        customerName: '',
        price: '',
        lastModification: new Date().toISOString().slice(0, 10)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        addData(formData);
        setFormData({
            id: '',
            customerName: '',
            price: '',
            lastModification: new Date().toISOString().slice(0, 10)
        });
        onClose();
        // toast.success("Sale order added")
    };
    const notify = () => toast("Sale order added!");
    const handleBothActions = () => {
        handleSubmit();
        notify();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Sale Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>ID</FormLabel>
                        <Input type="text" placeholder="ID" name="id" value={formData.id} onChange={handleChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Customer Name</FormLabel>
                        <Input type="text" placeholder="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Price</FormLabel>
                        <Input type="text" placeholder="Price" name="price" value={formData.price} onChange={handleChange} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleBothActions}>
                        Submit
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SaleOrderModal;
