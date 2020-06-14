import React from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import R from 'ramda';

import Layout from '../../components/Layout';
import { getAllInvites, getInvite, InviteT } from '../../lib/invites';

export default function Invite({ invite }: { invite: InviteT }): JSX.Element {
  return (
    <Layout>
      <div className="flex flex-col p-12 mx-auto border-dashed border-2 border-gray-600">
        <div className="flex flex-col md:flex-row justify-center items-center mb-12">
          <div className="mb-6 md:mb-0 md:mr-12">
            <img className="h-64 w-64 rounded-t-full object-contain" src="/images/invite.jpg" alt="pozvánka" />
          </div>
          <div className="text-center mt-6 md:my-0">
            <div className="text-6xl">Zveme {invite.count > 1 ? 'Vás' : 'Tě'}</div>
            <h2 className="text-4xl">{invite.name}</h2>
            <div className="text-5xl">
              <Link href="/">&#9758; na naši svatbu!</Link>
            </div>
          </div>
        </div>
      </div>
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
