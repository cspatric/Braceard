import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@headlessui/react";
import logo from './2.png';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user: "",
        bio: "sem biografia",
        birthday: "",
        country: "",
        city: "",
        neighborhood: "",
        street: "",
        status: "",
        hobby: "",
        music: "",
        sport: "",
        educacion: "",
        instituicao: "",
        course: "",
        work: "",
        deficiency: "",
        allergy: "",
        medications: "",
        medical_conditions: "",
        blood_type: "",
        disorders: "",
        name_emergency: "", // Campo da primeira step de emergência
        relation_emergency: "", // Campo da primeira step de emergência
        telefone_emergency: "", // Campo da primeira step de emergência
        email_emergency: "", // Campo da primeira step de emergência
        instagram: "", // Campo de redes sociais
        tiktok: "", // Campo de redes sociais
        site: "", // Campo de redes sociais
        linkedin: "", // Campo de redes sociais
        whatsapp: "", // Campo de redes sociais
    });

    const [step, setStep] = useState(1); // Controle para as etapas

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 7));
    const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="bg-gradient-to-r from-[#751DD2] to-[#3C0F6B] md:max-w-screen md:max-w-96 w-full h-screen rounded-3xl flex flex-col justify-between items-center">
                <div>
                <img
        className="absolute left-1/2 -top-5 h-36 transform -translate-x-1/2"
        src={logo}
        alt=""
    />
                </div>
                <div className="bg-white w-full rounded-3xl h-6/6 flex flex-col gap-6">
                    <div className="mt-4">
                        <h1 className="font-extrabold text-4xl ml-8">
                            Sign Up
                        </h1>
                        <p className="ml-8 text-gray-500 text-xl">
                            Etapa {step} de 7
                        </p>
                    </div>
                    <form className="px-8" onSubmit={submit}>
                        <div className="overflow-auto min-h-[450px] max-h-[450px] w-full">
                            {step === 1 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Nome"
                                        />
                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="user"
                                            value="Usuário"
                                        />
                                        <TextInput
                                            id="user"
                                            name="user"
                                            value={data.user}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("user", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.user}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="birthday"
                                            value="Data de Nascimento"
                                        />
                                        <TextInput
                                            id="birthday"
                                            name="birthday"
                                            type="date"
                                            value={data.birthday}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "birthday",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.birthday}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="password"
                                            value="Senha"
                                        />
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirmação de Senha"
                                        />
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="country"
                                            value="País"
                                        />
                                        <TextInput
                                            id="country"
                                            name="country"
                                            value={data.country}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "country",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.country}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="city"
                                            value="Cidade"
                                        />
                                        <TextInput
                                            id="city"
                                            name="city"
                                            value={data.city}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("city", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.city}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="neighborhood"
                                            value="Bairro"
                                        />
                                        <TextInput
                                            id="neighborhood"
                                            name="neighborhood"
                                            value={data.neighborhood}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "neighborhood",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.neighborhood}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="street"
                                            value="Rua"
                                        />
                                        <TextInput
                                            id="street"
                                            name="street"
                                            value={data.street}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "street",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.street}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="status"
                                            value="Status"
                                        />
                                        <TextInput
                                            id="status"
                                            name="status"
                                            value={data.status}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.status}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="hobby"
                                            value="Hobby"
                                        />
                                        <TextInput
                                            id="hobby"
                                            name="hobby"
                                            value={data.hobby}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("hobby", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.hobby}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="music"
                                            value="Música"
                                        />
                                        <TextInput
                                            id="music"
                                            name="music"
                                            value={data.music}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("music", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.music}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="sport"
                                            value="Esporte"
                                        />
                                        <TextInput
                                            id="sport"
                                            name="sport"
                                            value={data.sport}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("sport", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.sport}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                            {step === 4 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="educacion"
                                            value="Educação"
                                        />
                                        <TextInput
                                            id="educacion"
                                            name="educacion"
                                            value={data.educacion}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "educacion",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.educacion}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="instituicao"
                                            value="Instituição"
                                        />
                                        <TextInput
                                            id="instituicao"
                                            name="instituicao"
                                            value={data.instituicao}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "instituicao",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.instituicao}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="course"
                                            value="Curso"
                                        />
                                        <TextInput
                                            id="course"
                                            name="course"
                                            value={data.course}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "course",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.course}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="work"
                                            value="Trabalho"
                                        />
                                        <TextInput
                                            id="work"
                                            name="work"
                                            value={data.work}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("work", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.work}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                            {step === 5 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="deficiency"
                                            value="Deficiência"
                                        />
                                        <TextInput
                                            id="deficiency"
                                            name="deficiency"
                                            value={data.deficiency}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "deficiency",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.deficiency}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="allergy"
                                            value="Alergia"
                                        />
                                        <TextInput
                                            id="allergy"
                                            name="allergy"
                                            value={data.allergy}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "allergy",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.allergy}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="medications"
                                            value="Medicações"
                                        />
                                        <TextInput
                                            id="medications"
                                            name="medications"
                                            value={data.medications}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "medications",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.medications}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="medical_conditions"
                                            value="Condições Médicas"
                                        />
                                        <TextInput
                                            id="medical_conditions"
                                            name="medical_conditions"
                                            value={data.medical_conditions}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "medical_conditions",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.medical_conditions}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="blood_type"
                                            value="Tipo Sanguíneo"
                                        />
                                        <TextInput
                                            id="blood_type"
                                            name="blood_type"
                                            value={data.blood_type}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "blood_type",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.blood_type}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="disorders"
                                            value="Transtornos"
                                        />
                                        <TextInput
                                            id="disorders"
                                            name="disorders"
                                            value={data.disorders}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "disorders",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.disorders}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                            {step === 6 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="name_emergency"
                                            value="Nome da Pessoa de Emergência"
                                        />
                                        <TextInput
                                            id="name_emergency"
                                            name="name_emergency"
                                            value={data.name_emergency}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "name_emergency",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.name_emergency}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="relation_emergency"
                                            value="Relação com a Pessoa de Emergência"
                                        />
                                        <TextInput
                                            id="relation_emergency"
                                            name="relation_emergency"
                                            value={data.relation_emergency}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "relation_emergency",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.relation_emergency}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="telefone_emergency"
                                            value="Telefone da Pessoa de Emergência"
                                        />
                                        <TextInput
                                            id="telefone_emergency"
                                            name="telefone_emergency"
                                            value={data.telefone_emergency}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "telefone_emergency",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.telefone_emergency}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="email_emergency"
                                            value="Email da Pessoa de Emergência"
                                        />
                                        <TextInput
                                            id="email_emergency"
                                            name="email_emergency"
                                            value={data.email_emergency}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "email_emergency",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.email_emergency}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}

                            {step === 7 && (
                                <>
                                    <div>
                                        <InputLabel
                                            htmlFor="instagram"
                                            value="Instagram"
                                        />
                                        <TextInput
                                            id="instagram"
                                            name="instagram"
                                            value={data.instagram}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "instagram",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.instagram}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="tiktok"
                                            value="TikTok"
                                        />
                                        <TextInput
                                            id="tiktok"
                                            name="tiktok"
                                            value={data.tiktok}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "tiktok",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.tiktok}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="site"
                                            value="Site"
                                        />
                                        <TextInput
                                            id="site"
                                            name="site"
                                            value={data.site}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData("site", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.site}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="linkedin"
                                            value="LinkedIn"
                                        />
                                        <TextInput
                                            id="linkedin"
                                            name="linkedin"
                                            value={data.linkedin}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "linkedin",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.linkedin}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="whatsapp"
                                            value="WhatsApp"
                                        />
                                        <TextInput
                                            id="whatsapp"
                                            name="whatsapp"
                                            value={data.whatsapp}
                                            className="mt-2 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "whatsapp",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.whatsapp}
                                            className="mt-2"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Button
                                type="button"
                                onClick={handlePrevious}
                                disabled={step === 1}
                                className="bg-gray-200 p-3 rounded-xl"
                            >
                                Anterior
                            </Button>
                            {step < 7 ? (
                                <Button
                                    type="button"
                                    onClick={handleNext}
                                    className="bg-gradient-to-r from-[#751DD2] to-[#3C0F6B] text-white p-3 rounded-xl"
                                >
                                    Próximo
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-gradient-to-r from-[#751DD2] to-[#3C0F6B] text-white p-3 rounded-xl"
                                >
                                    Registrar
                                </Button>
                            )}
                        </div>
                    </form>
                    <div className="w-ful flex justify-center items-center flex-col gap-4">
                        <p className="flex gap-1 text-gray-400 font-bold py-8">
                            Já tem um perfil?
                            <Link href={route("login")}>
                                <p className="font-bold text-purple-800">
                                    Entrar
                                </p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
