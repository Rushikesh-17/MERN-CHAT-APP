import React from "react";
import {
  TextInput,
  PasswordInput,
  Group,
  // Checkbox,
  Button,
  // Anchor,
  Stack,
} from "@mantine/core";
import axios from "axios";

import { useForm } from "@mantine/form";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const SubmitHandler = async () => {
    const email = form.values.email;
    const password = form.values.password;
   
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      localStorage.setItem("LoginInfo", JSON.stringify(data));

      history.push("/chats");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack withBorder pacing="xl" shadow="md" p={10} radius="md">
      <form onSubmit={form.onSubmit(() => SubmitHandler())}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Enter Your Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter Password"
          {...form.getInputProps("password")}
        />
        {/* <Group position="apart">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group> */}
        <Group mt="md">
          <Button fullWidth type="submit">
            Log in
          </Button>
          <Button fullWidth color="green"
          onClick={()=>form.setValues({ email:"guest@example.com",password:"guest123" })}
            >
            Guest User
          </Button>
        </Group>
      </form>
    </Stack>
  );
};

export default Login;
