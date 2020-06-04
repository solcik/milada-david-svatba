import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import R from 'ramda';
import Layout from '../../components/Layout';
import { getAllInvites, getInvite, InviteT } from '../../lib/invites';

export default function Invite({ invite }: { invite: InviteT }): JSX.Element {
  return (
    <Layout>
      <h1>
        {invite.id} - {invite.name}
      </h1>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const invites = getAllInvites();
  const paths = R.map((invite) => ({ params: { id: invite.id } }), invites);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const id = params.id as string;

  const invite = getInvite(id);
  return {
    props: {
      invite,
    },
  };
};
