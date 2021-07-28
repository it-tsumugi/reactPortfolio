import { useForm } from "react-hook-form";
import { sendForm } from "emailjs-com";
import { VFC } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Contact: VFC = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const sendMail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      e.target,
      `${process.env.REACT_APP_USER_ID}`
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
    window.alert("メールを送信しました。");
    e.target.reset();
  };

  return (
    <SContainer>
      <p>お気軽に下記フォームより必須事項をご記入の上ご連絡ください。</p>
      <form className="forms" onSubmit={sendMail} id="contact-form">
        <STextField
          className="formsItem"
          variant="filled"
          label="件名(必須)"
          type="text"
          fullWidth
          margin="normal"
          {...register("subject", { required: true })}
          error={Boolean(errors.subject)}
          helperText={errors.subject && "件名を入力してください"}
        />
        <STextField
          className="formsItem"
          variant="filled"
          label="氏名(必須)"
          type="text"
          fullWidth
          margin="normal"
          {...register("name", { required: true })}
          error={Boolean(errors.name)}
          helperText={errors.name && "氏名を入力してください"}
        />
        <STextField
          className="formsItem"
          variant="filled"
          label="返信用メールアドレス(必須)"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", { required: true })}
          error={Boolean(errors.email)}
          helperText={errors.email && "メールアドレスを入力してください"}
        />

        <STextField
          className="formsItem"
          variant="filled"
          label="お問い合わせ内容(必須)"
          type="text"
          fullWidth
          margin="normal"
          {...register("message", { required: true })}
          error={Boolean(errors.body)}
          helperText={errors.body && "お問い合わせ内容を入力して下さい。"}
          multiline
          rows="8"
        />
        <SButton
          className="submitButton"
          variant="contained"
          color="default"
          type="submit"
        >
          送信
        </SButton>
      </form>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 80px 0 0;
`;

const STextField = styled(TextField)`
  background-color: white;
  ::placeholder {
    color: gray;
  }
`;

const SButton = styled(Button)`
  margin-top: 10;
  float: left;
`;