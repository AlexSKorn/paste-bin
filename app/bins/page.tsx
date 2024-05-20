import PastebinCard from "@/components/pastebin-card";
import copy from "copy-to-clipboard";
import React, { useState } from 'react';



export default async function PasteBinPage() {
  const getPasteBins = async () => {
    const res = await fetch('http://localhost:3000/api/bins', {
      next: { revalidate: 10 }
    }).then(res => res.json())
      .catch(err => console.error(err))

    return res;
  }

  const bins: Bin[] = await getPasteBins()

  return (
    <div className="flex justify-center min-h-screen min-w-screen flex-col">
      <h1 className="m-4">This is the bins page</h1>
      <div className="w-full flex flex-row flex-wrap items-center">
        {bins?.length > 0 ? (
          bins.map(bin => (
            <React.Fragment key={bin.id.toString()}>
              <PastebinCard bin={bin} />
            </React.Fragment>
          ))
        ) : (
          <p>You dont have any paste bins</p>
        )}
      </div >
    </div>
  );
}