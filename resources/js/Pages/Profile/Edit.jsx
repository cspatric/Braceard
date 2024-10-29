import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import logo from "../Auth/2.png";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="bg-gradient-to-r from-[#751DD2] to-[#3C0F6B] md:max-w-screen md:max-w-96 w-full h-screen rounded-3xl flex flex-col justify-between items-center">
                {/* Logo Section */}
                <div className="relative">
                    <img
                        className="absolute left-1/2 -top-10 h-52 transform -translate-x-1/2"
                        src={logo}
                        alt="Logo"
                    />
                </div>
                {/* Main Content */}
                <div className="bg-white w-full rounded-3xl h-4/5 flex flex-col gap-6 p-4 overflow-auto">
                    <img
                        className="w-40 h-40 left-1/2 top-24 transform -translate-x-1/2 bg-black rounded-full absolute"
                        src=""
                        alt="Profile"
                    />
                    <div className="pt-24 flex flex-col justify-center items-center w-full">
                        <h1 className="font-extrabold text-4xl">Nome</h1>
                        <p className="text-gray-500 text-xl">user</p>
                        <div className="flex gap-4 mt-2">
                            <button className="bg-gray-200 py-3 px-8 text-gray-800 rounded-lg">
                                Ligar
                            </button>
                            <button className="bg-gray-200 py-3 px-8 text-gray-800 rounded-lg">
                                Like
                            </button>
                        </div>
                        <p className="text-center w-2/3 text-gray-500 text-xl mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit.
                        </p>

                        {/* About Section */}
                        <div className="mt-4 w-full border border-gray-300 rounded-lg p-4">
                            <h2 className="font-bold text-2xl mb-2">Sobre Pedro</h2>
                            <div className="flex flex-col">
                                {[
                                    { label: "Nome", value: "Pedro José" },
                                    { label: "Usuário", value: "@pedronozes" },
                                    { label: "Data de Nascimento", value: "21 de Setembro, 2005" },
                                    { label: "Estado Civil", value: "Solteiro" },
                                    { label: "Menor de Idade", value: "Sim", isBold: true, color: "text-purple-600" },
                                    { label: "Redes Sociais", value: "@pedrinhope, www.pedro.com" },
                                    { label: "Interesses", value: "Pescar, Nadar, Correr" },
                                    { label: "Ouço", value: "Racionais, Kanye West" },
                                    { label: "Pratica", value: "Academia, Natação, Judô" },
                                ].map((item, index) => (
                                    <div key={index} className={`flex justify-between py-2 border-b ${item.isBold ? item.color : ''}`}>
                                        <span>{item.label}:</span>
                                        <span className={item.isBold ? "font-bold" : ""}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-2">
                            {[
                                { label: "Pedro concluiu", value: "Pré fundamental 1" },
                                { label: "Pedro estuda em", value: "Educação Criativa" },
                                { label: "Pedro cursa", value: "Educação Regular" },
                                { label: "Pedro trabalha como", value: "Sem informação" },
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <span>{item.label}:</span>
                                    <span>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Health Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-2">
                            {[
                                { label: "Pedro deficiência", value: "Sem informação" },
                                { label: "Pedro é alérgico a", value: "Dipirona, Nimesulida" },
                                { label: "Pedro se medica regularmente com", value: "Ibuprofeno, Infectrim" },
                                { label: "Pedro tem", value: "Gastrite Nervosa" },
                                { label: "Pedro tem sangue tipo", value: "O-" },
                                { label: "Pedro porta", value: "TDAH" },
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <span>{item.label}:</span>
                                    <span>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Emergency Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-2">
                            <p className="mb-2">
                                Em caso de alguma emergência, ligue para algum responsável ou alguém próximo de Pedro!
                            </p>
                            {[
                                { label: "Nome", value: "Jose Neto" },
                                { label: "Telefone", value: "31985405675" },
                                { label: "Parentesco", value: "Pai de Pedro" },
                                { label: "Email", value: "jose@gmail.com" },
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <span>{item.label}:</span>
                                    <span>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
