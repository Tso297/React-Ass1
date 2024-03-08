import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Modal from './Modal.tsx';
import { server_calls } from './server.ts';
import { DataGrid } from '@mui/x-data-grid';
import { useGetData } from './hooks.tsx';
import ContactForm from './ContactForm.tsx';

const DataTable = () => {
    const { contactData, getData } = useGetData();
    const [openModal, setOpenModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        setIsLoggedIn(true); 
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedItemId(null);
    };

    const handleCreate = async (data: any) => {
        try {
            await server_calls.create(data);
            getData();
            setOpenModal(false);
            setSelectedItemId(null);
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    const handleUpdate = async (id: string) => {
        setSelectedItemId(id);
        setOpenModal(true);
    };

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Modal open={openModal} onClose={handleCloseModal} id={selectedItemId} />
            {openModal && <ContactForm id={selectedItemId} onClose={handleCloseModal} onSubmit={handleCreate} />}
            <div className="container bg-white bg-opacity-75 mx-auto mt-10 mb-5">
                <h2 className="p-3 bg-slate-300 my-2 rounded">Pimpmobiles</h2>
                <DataGrid
                    rows={contactData.map((_, index) => ({ id: index + 1, ..._ }))}
                    columns={[
                        { field: 'id', hide: true },
                        { field: 'color', headerName: 'Color', flex: 1 },
                        { field: 'make', headerName: 'Make', flex: 1 },
                        { field: 'model', headerName: 'Model', flex: 1 },
                        { field: 'year', headerName: 'Year', flex: 1 }
                    ]}
                    checkboxSelection={false}
                    onRowClick={(rowData) => handleUpdate(rowData.id as string)}
                    rowHeight={36}
                    components={{
                        Footer: () => (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '8px' }}>
                                <button onClick={handleOpenModal} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'>Create</button>
                            </div>
                        ),
                    }}
                />
            </div>
        </>
    );
};

export default DataTable;