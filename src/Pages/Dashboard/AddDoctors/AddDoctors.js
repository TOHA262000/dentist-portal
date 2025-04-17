import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imageHostKey;

    const { data: specialties = [] } = useQuery({

        queryKey: ['specialtis'],
        queryFn: async () => {
            const res = await fetch('https://dentist-portal-server.vercel.app/appointmenSpecialty');
            const data = res.json();
            return data;
        }
    })
    const handleAddDocto = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imgUrl = imageData.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        imgUrl
                    }
                    fetch('https://dentist-portal-server.vercel.app/doctors', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Doctor Add Success')
                                navigate('/dashboard/managedoctors')
                            }
                        });
                }
            })
    }
    return (

        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add a New Doctor </h2>
            <form onSubmit={handleSubmit(handleAddDocto)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: "Name is required" })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered w-full" />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select select-bordered w-full">
                        {specialties?.map(specialty => <option
                            key={specialty._id}
                            specialty={specialty}
                        >{specialty.name}</option>)}

                    </select>
                </div>

                <div className="form-control mt-4 border-dashed border-2 border-gray-400 rounded-lg p-8 flex justify-center items-center   w-full ">
                    <label className="label flex flex-col items-center">
                        <span className="label-text"><FaImage></FaImage></span>
                        <input type="file"
                            className=""
                            {...register("img", { required: "Image  is required" })}/>
                            
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                    </label>

                </div>

                <div className=" mt-4 form-control w-full ">
                    <input className='btn btn-accent w-full' type="submit" value='ADD DOCTOR' />
                </div>
            </form>
        </div>
    );
};

export default AddDoctors;