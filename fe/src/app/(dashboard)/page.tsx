'use client';

import { AccountList } from '@/presentation/organisms';
import { QueriesUsers } from '@/graphql/queries/users';
import { useMutation, useQuery } from '@apollo/client';
import { faker } from '@faker-js/faker';

export default function Home() {

  const { data, refetch } = useQuery(QueriesUsers.query.users);
  const [createAccount, { data: createData, error }] = useMutation(
    QueriesUsers.mutation.user,
    {
      onCompleted: () => {
        refetch();
      },
      onError: (error) => {
        alert(error);
        //
      },
    }
  );

  return (
    <div className="p-10">
      <AccountList />
      <button
        onClick={() => {
          createAccount({
            variables: {
              createUserInput: {
                userName: faker.internet.userName(),
                email: faker.internet.email(),
              },
            },
          });
        }}
        className="border rounded border-red-200 p-1 my-4"
      >
        Click Me
      </button>
      {/* {createData && <h4>Create account success</h4>} */}
      <fieldset className="border rounded border-red-200 p-5">
        <legend className="text-2xl text-yellow-300 px-5">
          Available List Accounts
        </legend>
        {/* {error && <div>{error.message}</div>} */}
        <div className="">
          {data?.users?.map((item) => (
            <div
              key={item.id}
              className="flex gap-[8rem] odd:text-blue-400 even:text-green-400 justify-between"
            >
              <div>{item.userName}</div>
              <div>{item.email}</div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
