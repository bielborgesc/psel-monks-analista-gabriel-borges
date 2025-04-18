import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../services/api";

const schema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  mensagem: yup.string().required("Mensagem é obrigatória"),
});

export default function FormContato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/monks/v1/send-form", data);
      alert(res.data.message);
      reset();
    } catch (err) {
      alert("Erro ao enviar formulário.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <div>
        <label>Nome</label>
        <input {...register("nome")} className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.nome?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} type="email" className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      <div>
        <label>Mensagem</label>
        <textarea {...register("mensagem")} className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.mensagem?.message}</p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </form>
  );
}
