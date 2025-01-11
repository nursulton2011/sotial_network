import { Heading } from "../../components/typography/Heading";
import { Button, Input } from "../../components/UI/index";
import "./RegistrationPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IRegistrationPage {
  useremail: string;
  userpassword: string;
  userlastname: string;
  usercity: string;
  userphone: string;
  username: string;
}

const regFormSchema = yup.object({
  useremail: yup
    .string()
    .required("Объезательное поле")
    .email("Введите почту в правильном формате"),
  userpassword: yup
    .string()
    .required("Объезательное поле")
    .min(8, "Минимум 8 символов"),
  username: yup
    .string()
    .required("Объезательное поле")
    .min(3, "Имя может быть минимум 3 буквы"),
  userlastname: yup
    .string()
    .required("Объезательное поле")
    .min(5, "Фамилия может быть минимум 5 букв"),
  usercity: yup
    .string()
    .required("Объезательное поле")
    .min(5, "Название города может быть минимум 5 букв"),
  userphone: yup
    .string() // Изменить на строку
    .required("Объезательное поле")
    .matches(/^\+?[0-9\s\-\(\)]{7,}$/, "Неверный формат телефона")
    .min(13, "Номер телефона должен быть похож на +998(XX)XXXXXXX"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
      userphone: "",
      usercity: "",
      userlastname: "",
      username: "",
    },
  });

  const onSubmit: SubmitHandler<IRegistrationPage> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading text="Регистрация " />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.username ? true : false}
              errorMessage={errors.username?.message}
              type="text"
              placeholder="Имя"
              {...field}
            />
          )}
        />

        <Controller
          name="userlastname"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.userlastname ? true : false}
              errorMessage={errors.userlastname?.message}
              type="text"
              placeholder="Введите фамилию"
              {...field}
            />
          )}
        />

        <Controller
          name="usercity"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.usercity ? true : false}
              errorMessage={errors.usercity?.message}
              type="text"
              placeholder="Введите название вашего города"
              {...field}
            />
          )}
        />

        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.useremail ? true : false}
              errorMessage={errors.useremail?.message}
              type="email"
              placeholder="Введите email"
              {...field}
            />
          )}
        />

        <Controller
          name="userphone"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.userphone ? true : false}
              errorMessage={errors.userphone?.message}
              type="tel"
              placeholder="+1234567890"
              {...field}
            />
          )}
        />

        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.userpassword ? true : false}
              errorMessage={errors.userpassword?.message}
              type="password"
              placeholder="Пароль"
              {...field}
            />
          )}
        />
        <Button type="submit" text={"Загестрироваться"} />
      </form>
    </>
  );
};
