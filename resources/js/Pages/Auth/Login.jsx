import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import logo from "./2.png";

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
                <div>
                    <img
                        className="absolute left-1/2 -top-2 h-52 transform -translate-x-1/2"
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="bg-white w-full rounded-3xl h-4/5 flex flex-col gap-6">
                
                    <div className="mt-4">
                        <h1 className="font-extrabold text-4xl ml-8">Log In</h1>
                        <p className="ml-8 text-gray-500 text-xl">
                            Seja bem-Vindo
                        </p>
                    </div>
                    <form className="px-8" onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Insira seu Email:"
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Senha" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Insira sua Senha:"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Lembrar Senha
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            {/* {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )} */}

                            <PrimaryButton
                                className="bg-gradient-to-r from-[#751DD2] to-[#3C0F6B] mt-6 w-3/5"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="w-full flex justify-center items-center flex-col gap-4">
                        <p className="flex gap-1 text-gray-400 font-bold">
                            Novo por aqui?
                            <Link href={route("register")}>
                                <p className="font-bold text-purple-800">
                                    Criar perfil
                                </p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
