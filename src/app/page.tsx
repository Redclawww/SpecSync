import type { InferGetStaticPropsType, GetStaticProps } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

type Repo = {
  
};

export const getStaticProps = (async (context) => {
  const res = await axios.get("/api/phonelist");
  const data = await res.data;
  
  return { props: { data } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

export default async function Home({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [brandList, setBrandList] = useState(["apple"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue={"none"}>Choose a Brand</option>
          {phoneList.map((brand) => (
            <option value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </main>
  );
}
