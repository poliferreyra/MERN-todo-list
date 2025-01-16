import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AddUser } from "../../redux/store/userSlice";

interface LoginFormProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const dispatch = useDispatch(); // Usamos useDispatch para despachar las acciones
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>();

  const onSubmit = (data: LoginFormProps) => {
    console.log(data); // Aquí puedes integrar Redux o enviar datos al backend
    // En este punto, puedes enviar la información al backend (MERN) para verificar las credenciales
    // Si el login es exitoso, despachamos la acción para guardar al usuario en Redux
    dispatch(AddUser({ user: data.email, email: data.email })); // Aquí reemplazas con los datos reales del usuario
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label>Email:</Label>
        <Input
          {...register("email", { required: "El email es obligatorio" })}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </FormField>

      <FormField>
        <Label>Contraseña:</Label>
        <Input
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </FormField>

      <SubmitButton type="submit">Iniciar sesión</SubmitButton>
    </Form>
  );
}

// TODO pasar los estilos a styles/form
// Styled Components (reutilizables)
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Error = styled.span`
  font-size: 0.875rem;
  color: #e74c3c;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #efce18;

  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;



