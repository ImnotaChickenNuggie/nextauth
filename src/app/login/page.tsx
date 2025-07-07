import React from 'react';
import { Input } from '@/components/ui/input';

const Page = () => {
    return (
        <div className="flex flex-col">
            <h1 className="my-10 text-center text-3xl font-medium">
                Inicio de Sesión
            </h1>
            <div className="flex flex-col rounded-md p-4 border-[0.3px] border-gray-300 mx-auto">
                <div className="grid grid-cols-1">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
