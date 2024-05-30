import React, { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import NavigationBar from './NavigationBar';
import DataTable from './Table';
import SaleOrderModal from './SaleOrderModal';

const Dashboard = () => {
    const [data, setData] = useState([
        // some default data
        { id: 1, customerName: 'Customer 1', price: 100, lastModification: '2024-05-29' },
        { id: 2, customerName: 'Customer 2', price: 200, lastModification: '2024-05-30' }
    
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const addData = (newData) => {
        setData([...data, newData]);
    };

    const updateData = (updatedData) => {
        const updatedItems = data.map(item =>
            item.id === updatedData.id ? updatedData : item
        );
        setData(updatedItems);
    };

    const bg = useColorModeValue('gray.100', 'gray.700');
    const color = useColorModeValue('black', 'white');

    return (
        <Box bg={bg} color={color} minHeight="100vh" p={4}>
            <NavigationBar openModal={toggleModal} />
            <DataTable data={data} updateData={updateData} />
            <SaleOrderModal isOpen={isModalOpen} onClose={toggleModal} addData={addData} />
        </Box>
    );
};

export default Dashboard;
