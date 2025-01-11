import "./LoginPage.scss";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { AppLink, AuthWith } from "../../components/";
import { Heading } from "../../components/typography/Heading";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginPage {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup
    .string()
    .required("Объезательное поле")
    .email("Введите почту в правильном формате"),
  userpassword: yup
    .string()
    .required("Объезательное поле")
    .min(8, "Минимум 8 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const onSubmit: SubmitHandler<ILoginPage> = (data) => {
    console.log(data);
  };

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Location", location);
  console.log("nav", navigate);
  console.log(params);

  return (
    <div className="LoginPage">
      <Heading text="Авторизация " />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input
              isError={errors.useremail ? true : false}
              errorMessage={errors.useremail?.message}
              type="text"
              placeholder="Эл.почта"
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
        <Button type="submit" text={"Войти"} />
      </form>
      <AppLink text="Забыли пароль?" href="#" />
      <AuthWith />
    </div>
  );
};
