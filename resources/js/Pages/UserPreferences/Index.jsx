import { Head, useForm } from "@inertiajs/react";


export default function UserPreference({ userpreference, user }) {
    const { data, setData, post, processing, errors } = useForm({});

    // Função para enviar o formulário
    const submit = (e) => {
        e.preventDefault();
        post(route("userpreference.store")); // Enviando para o método store do controller
    };

    return (
        <div className="py-12">
            <div className="p-4 h-auto rounded-xl bg-green-800 text-gray-900">
                <h1 className="text-2xl text-white font-bold">
                    Informações pessoais
                </h1>

                {/* //caso nao tenha linha na tabela user_preferences com id do auth */}
                <form onSubmit={submit} className="mt-4 space-y-4">
                    <div>
                        <label className="text-white" htmlFor="status">
                            Status
                        </label>
                        <input
                            id="status"
                            type="text"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            className="mt-1 block w-full p-2 rounded"
                            placeholder="Digite seu status"
                        />
                        {errors.status && (
                            <div className="text-red-500">{errors.status}</div>
                        )}
                    </div>

                    <div>
                        <label className="text-white" htmlFor="hobby">
                            Hobby
                        </label>
                        <input
                            id="hobby"
                            type="text"
                            value={data.hobby}
                            onChange={(e) => setData("hobby", e.target.value)}
                            className="mt-1 block w-full p-2 rounded"
                            placeholder="Digite seu hobby"
                        />
                        {errors.hobby && (
                            <div className="text-red-500">{errors.hobby}</div>
                        )}
                    </div>

                    <div>
                        <label className="text-white" htmlFor="music">
                            Música favorita
                        </label>
                        <input
                            id="music"
                            type="text"
                            value={data.music}
                            onChange={(e) => setData("music", e.target.value)}
                            className="mt-1 block w-full p-2 rounded"
                            placeholder="Digite sua música favorita"
                        />
                        {errors.music && (
                            <div className="text-red-500">{errors.music}</div>
                        )}
                    </div>

                    <div>
                        <label className="text-white" htmlFor="sports">
                            Esportes favoritos
                        </label>
                        <input
                            id="sports"
                            type="text"
                            value={data.sports}
                            onChange={(e) => setData("sports", e.target.value)}
                            className="mt-1 block w-full p-2 rounded"
                            placeholder="Digite seus esportes favoritos"
                        />
                        {errors.sports && (
                            <div className="text-red-500">{errors.sports}</div>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Salvar preferências
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
