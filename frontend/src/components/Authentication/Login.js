import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Anchor,
  Stack,
} from "@mantine/core";

const Login = () => {
  return (
    <Stack withBorder spacing="xl" shadow="md" p={10} radius="md">
      <TextInput label="Email" placeholder="you@mantine.dev" required />
      <PasswordInput label="Password" placeholder="Your password" required />
      <Group position="apart">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Button fullWidth>Sign in</Button>
    </Stack>
  );
}

export default Login