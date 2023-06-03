import { useForm } from "react-hook-form";

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (formData: any) => {};

  return (
    <form>
      <select>{}</select>
    </form>
  );
};
