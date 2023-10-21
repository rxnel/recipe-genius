import { useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <h1>Dashboard</h1>
        <p>Hi, {user.fullName}</p>
      </main>
    </>
  );
};

export default Dashboard;
