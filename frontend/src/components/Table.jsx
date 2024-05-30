
import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import EditModal from './EditModal';
import ViewModal from './ViewModal';

const DataTable = ({ data, updateData }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleEditClick = (item) => {
        setSelectedData(item);
        setIsEditModalOpen(true);
    };

    const handleViewClick = (item) => {
        setSelectedData(item);
        setIsViewModalOpen(true);
    };

    const handleEditSave = (updatedData) => {
        updateData(updatedData);
        setIsEditModalOpen(false);
    };

    return (
        <>
            <Table variant="striped" colorScheme="yellow">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Customer Name</Th>
                        <Th>Price</Th>
                        <Th>Last Modification</Th>
                        <Th>Edit</Th>
                        <Th>View</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.customerName}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.lastModification}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm" onClick={() => handleEditClick(item)}>
                                    Edit
                                </Button>
                            </Td>
                            <Td>
                                <Button colorScheme="green" size="sm" onClick={() => handleViewClick(item)}>
                                    View
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            {selectedData && (
                <>
                    <EditModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        data={selectedData}
                        onSave={handleEditSave}
                    />
                    <ViewModal
                        isOpen={isViewModalOpen}
                        onClose={() => setIsViewModalOpen(false)}
                        data={selectedData}
                    />
                </>
            )}
        </>
    );
};

export default DataTable;
