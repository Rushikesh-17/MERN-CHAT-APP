import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Group,
  Button,
  Stack,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import axios from "axios";

import { useForm } from "@mantine/form";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      pic: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      confirmpassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const postDetails = (pic) => {
    setloading(true);
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "Talk-A-Lot");
    data.append("cloud_name", "dgc9os9hh");
    fetch("https://api.cloudinary.com/v1_1/dgc9os9hh/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        form.setValues({ pic: data.url.toString() });
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
    
    
  };

  const SubmitHandler = async () => {

    setloading(true)
    const name = form.values.name;
    const email = form.values.email;
    const password = form.values.password;
    const pic = form.values.pic;

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      history.pushState("/chats");
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
    

  };

  return (
    <Stack withBorder spacing="xl" shadow="md" p={10} radius="md">
      <LoadingOverlay visible={loading} />
      <form onSubmit={form.onSubmit(() => SubmitHandler())}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter Your Name"
          {...form.getInputProps("name")}
        />
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
        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          {...form.getInputProps("confirmpassword")}
        />
        <FileInput
          label="Your Profile Pic"
          placeholder="Pick file"
          onChange={(value) => postDetails(value)}
          accept="image/png,image/jpeg"
        />

        <Group mt="md">
          <Button fullWidth type="submit">
            Register
          </Button>
        </Group>
      </form>
    </Stack>
  );
};

export default Signup;
