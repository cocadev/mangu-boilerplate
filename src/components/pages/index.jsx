import React from "react";
import { useMoralisQuery } from "react-moralis";

export default function Dashboard() {

  const { data: collections } = useMoralisQuery("OpenseaCollections", query => query.notEqualTo("image_url", null).limit(100000), [], { autoFetch: true });

  console.log('collections: ', collections);

  return (
    <div>
      <div id="__next" style={{ marginTop: -100}}>
        <main class="bg-gray-100 dark:bg-black min-h-full relative overflow-hidden flex flex-col">
          <div class="flex flex-col flex-1 self-stretch Page">

            <div class="max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative mt-4 sm:mt-6 pb-12 flex-1 self-center w-full">
              <div class="mx-auto max-w-screen-2xl">
                <div class="flex flex-col" style={{ gap: 24 }}>
                  <div class="flex flex-col" style={{ gap: 6 }}>
                    <h1
                      class="Heading-sc-1el7f6-0 hKUYjv font-heading font-extrabold antialiased text-4xl text-left text-darker dark:text-headline">
                      Trending NFT Collections
                      <span class="text-primary"> by Sales </span>
                    </h1>
                    <p weight="medium" class="font-body font-medium antialiased text-2xl text-dark dark:text-body">See
                      what&#x27;s selling. Prices updated in real time. </p>
                  </div>
                  <div class="flex flex-col" style={{ gap: 12 }}>
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden border-b dark:border-dark border-gray-200 rounded-lg">
                          <div class="flex flex-col" style={{ gap: 12 }}>
                            <table class="min-w-full">
                              <thead>
                                <tr>
                                  <td class="py-2" colspan="2">
                                    <div class="flex flex-row flex-wrap items-center">
                                      <div class="flex flex-col rounded-full px-4 bg-secondary py-1.5">
                                        <span>
                                          <p color="headline" weight="bold"
                                            class="font-body font-bold antialiased text-sm text-headline">
                                            <span class="cursor-pointer hover:text-darker hover:dark:text-lighter">Trending
                                            </span>
                                          </p>
                                        </span>
                                      </div>
                                      <div class="flex flex-col rounded-full px-4"><span>
                                        <p weight="bold"
                                          class="font-body font-bold antialiased text-sm text-dark dark:text-body">
                                          <span class="cursor-pointer hover:text-darker hover:dark:text-lighter">Discover
                                          </span>
                                        </p>
                                      </span></div>
                                    </div>
                                  </td>
                                </tr>
                              </thead>
                              <thead class="dark:bg-dark bg-light">
                                <tr>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        Collection </p>
                                    </div>
                                  </th>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        <div class="flex flex-row items-center" style={{ gap: 12 }}>
                                          <p weight="semibold"
                                            class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                            Sales floor </p>
                                        </div>
                                      </p>
                                    </div>
                                  </th>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        <div class="flex flex-row items-center" style={{ gap: 12 }}>
                                          <p weight="semibold"
                                            class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                            Sales </p>
                                          <div class="flex flex-col"><svg viewbox="0 0 20 20" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" class="opacity-30" width="14" height="14">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z">
                                            </path>
                                          </svg><svg viewbox="0 0 20 20" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" class="-mt-1" width="14" height="14">
                                              <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z">
                                              </path>
                                            </svg></div>
                                        </div>
                                      </p>
                                    </div>
                                  </th>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        <div class="flex flex-row items-center" style={{ gap: 12 }}>
                                          <p weight="semibold"
                                            class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                            Average </p>
                                        </div>
                                      </p>
                                    </div>
                                  </th>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        <div class="flex flex-row items-center" style={{ gap: 12 }}>
                                          <p weight="semibold"
                                            class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                            Volume </p>
                                        </div>
                                      </p>
                                    </div>
                                  </th>
                                  <th scope="col"
                                    class="px-6 py-2 text-left uppercase first:rounded-tl-lg last:rounded-tr-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800">
                                    <div class="flex flex-row items-center justify-between" style={{ gap: 6 }}>
                                      <p weight="semibold"
                                        class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                        <div class="flex flex-row items-center" style={{ gap: 12 }}>
                                          <p weight="semibold"
                                            class="font-body font-semibold antialiased text-xs text-dark dark:text-body">
                                            Mkt Cap </p>
                                        </div>
                                      </p>
                                    </div>
                                  </th>

                                </tr>
                              </thead>

                              <tbody class="bg-white dark:bg-darker divide-y divide-gray-200 dark:divide-dark">

                                {
                                  collections.map((item, index) => <ATOM key={index} item={item} />)
                                }

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

function ATOM({ item }) {
  const { image_url, name, count, market_cap, total_sales, one_day_average_price, thirty_day_sales, average_price, floor_price, one_day_volume } = item.attributes
  return (
    <tr class="cursor-pointer hover:bg-light dark:hover:bg-gray-800">
      <td class="whitespace-nowrap"><div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <div class="flex flex-row items-center" style={{ gap: 18 }}>
          <div class="flex flex-row"><img class="h-full w-full rounded-full"
            alt={name} src={image_url}
            style={{ height: 40, width: 40 }} /></div>
          <div class="flex flex-col">
            <p class="font-body font-bold antialiased text-base text-dark dark:text-light text-ellipsis overflow-hidden"
              color="light" style={{ maxWidth: 240 }} weight="bold">{name} </p>
            <p color="dim" weight="normal" class="font-body font-normal text-sm text-dim">
              Circulating supply:
              <strong>{count} </strong>
            </p>
          </div>
        </div>
      </div></td>
      <td class="whitespace-nowrap">
        <div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <p color="light" weight="bold"
          class="font-body font-bold antialiased text-base text-dark dark:text-light">
          <span class="">Ξ </span> {floor_price} <br />
          <div class="flex flex-row items-center"><svg viewbox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-red-400 dark:text-icy-red mr-1 rotate-45" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill="currentColor"></path>
          </svg><span class="text-red-400 dark:text-icy-red text-xs font-semibold">4.55
            %
            </span></div>
        </p>
      </div></td>
      <td class="whitespace-nowrap"><div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <p color="light" weight="bold"
          class="font-body font-bold antialiased text-base text-dark dark:text-light">
          {thirty_day_sales} <br />
          <div class="flex flex-row items-center"><svg viewbox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-green-500 dark:text-icy-green mr-1 rotate-45" width="14"
            height="14">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              fill="currentColor"></path>
          </svg><span class="text-xs font-semibold text-green-500 dark:text-icy-green">25
            %
            </span></div>
        </p>
      </div></td>
      <td class="whitespace-nowrap"><div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <p color="light" weight="bold"
          class="font-body font-bold antialiased text-base text-dark dark:text-light">
          <span class="">Ξ </span> {one_day_volume} <br />
          <div class="flex flex-row items-center"><svg viewbox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-red-400 dark:text-icy-red mr-1 rotate-45" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill="currentColor"></path>
          </svg><span class="text-red-400 dark:text-icy-red text-xs font-semibold">{one_day_average_price}
            %
            </span></div>
        </p>
      </div></td>
      <td class="whitespace-nowrap"><div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <p color="light" weight="bold"
          class="font-body font-bold antialiased text-base text-dark dark:text-light">
          <span class="">Ξ </span> {average_price} <br />
          <div class="flex flex-row items-center"><svg viewbox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-green-500 dark:text-icy-green mr-1 rotate-45" width="14"
            height="14">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              fill="currentColor"></path>
          </svg><span class="text-xs font-semibold text-green-500 dark:text-icy-green">15.14
            %
            </span></div>
        </p>
      </div></td>
      <td class="whitespace-nowrap"><div
        class="Link-sc-15s7clz-0 swTVV px-6 py-4 block hover:bg-opacity-75 transition duration-500 ease-in-out font-body font-normal text-base text-headline"
        >
        <div class="flex flex-col">
          <p color="light" weight="bold"
            class="font-body font-bold antialiased text-base text-dark dark:text-light">
            <span class="">Ξ </span> {total_sales}
          </p>
          <p color="icy-green" weight="bold"
            class="font-body font-bold antialiased text-xs text-green-500 dark:text-icy-green">
            ${market_cap} </p>
        </div>
      </div></td>
    </tr>
  )
}