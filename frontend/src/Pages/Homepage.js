import React from 'react';
import {
  Container,
  Box,
  Title,
  Tabs,
} from "@mantine/core";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';


const Homepage = () => {
  return (
    <Container size="xl">
      <Box
        sx={(theme) => ({
          display: "block",
          backgroundColor: theme.colors.gray[1],
          textAlign: "center",
          padding: theme.spacing.lg,
          borderRadius: theme.radius.md,
          justifyContent: "center",
          w: "100%",
          marginTop: "50px",
        })}
        size={420}
        my={40}
      >
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `work sans, ${theme.fontFamily}`,
            fontWeight: 900,
            padding: "0 100px",
          })}
        >
          Talk-A-Lot
        </Title>
      </Box>
      <Box
        sx={(theme) => ({
          display: "block",
          backgroundColor: theme.colors.gray[1],
          padding: theme.spacing.lg,
          borderRadius: theme.radius.md,
          justifyContent: "center",
          w: "100%",
          marginTop: "40px",
        })}
        size={420}
        my={40}
      >
        
        <Tabs defaultValue="LOGIN">
          <Tabs.List grow>
            <Tabs.Tab value="LOGIN">LOGIN</Tabs.Tab>
            <Tabs.Tab value="SIGNUP">SIGNUP</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="LOGIN"><Login/></Tabs.Panel>
          <Tabs.Panel value="SIGNUP"><Signup/></Tabs.Panel>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage