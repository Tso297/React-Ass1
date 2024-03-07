import React from 'react';
import Input from "./Input.tsx";
import { server_calls } from './server.ts';
import { useDispatch } from "react-redux";
import { chooseColor, chooseMake, chooseYear, chooseModel } from "./redux/slices/RootSlice.ts";
import { useForm } from 'react-hook-form';

interface ContactFormProps {
    id: string | null; // Change id type to string | null
    onClose: () => void;
}

const ContactForm = (props: ContactFormProps) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();

    const onSubmit = async (data: any, event: any) => {
        try {
            console.log('Form data:', data);

            if (props.id) {
                // If props.id exists, it means we're updating an existing item
                await server_calls.update(props.id, data);
                console.log(`Updated data: ${data.color}, ID: ${props.id}`);
            } else {
                // If props.id is null, it means we're creating a new item
                dispatch(chooseColor(data.color));
                dispatch(chooseMake(data.make));
                dispatch(chooseModel(data.model));
                dispatch(chooseYear(data.year));
                await server_calls.create(data);
                console.log('New data created:', data);
            }

            setTimeout(() => { window.location.reload() }, 1000);
            event.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., display error message to the user)
        }
    }

    return (
        <div className="modal">
            <div className="modal-content p-4 bg-white rounded-lg shadow-md">
                <span className="close" onClick={props.onClose}>&times;</span>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="color" className="block">Color</label>
                        <Input {...register('color')} name='color' placeholder="color"/>
                    </div>
                    <div>
                        <label htmlFor="make" className="block">Make</label>
                        <Input {...register('make')} name='make' placeholder="make"/>
                    </div>
                    <div>
                        <label htmlFor="model" className="block">Model Number</label>
                        <Input {...register('model')} name='model' placeholder="model number"/>
                    </div>
                    <div>
                        <label htmlFor="year" className="block">Year</label>
                        <Input {...register('year')} name='year' placeholder="year"/>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;