import { getSession } from "next-auth/react";

interface Imap {
  session: any;
}

const Map = ({ session }: Imap) => {
  return <div>{session.user.email}</div>;
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: "/login"
      }
    };
  return {
    props: { session }
  };
};

export default Map;
