import PastebinCard from "@/components/pastebin-card";
import copy from "copy-to-clipboard";
import React, { useState } from 'react';

export type Bin = {
  id: Number;
  authorId: Number;
  title: String;
  sharedWithUsers: Number[];
  name: String;
  text: String;
}

const testBins: Bin[] = [
  {
    id: 1,
    authorId: 1,
    title: 'Title 1',
    name: 'Bin 1',
    sharedWithUsers: [],
    text: 'This is bin 1',
  },
  {
    id: 2,
    authorId: 1,
    title: 'Title 2',
    name: 'Bin 2',
    sharedWithUsers: [],
    text: 'This is bin 2',
  },
  {
    id: 3,
    authorId: 1,
    title: 'Title 4',
    name: 'Bin 3',
    sharedWithUsers: [],
    text: 'This is bin 3',
  },
  {
    id: 4,
    authorId: 1,
    title: 'Title 4',
    name: 'Bin 4',
    sharedWithUsers: [],
    text: 'This is bin 4',
  },
  {
    id: 5,
    authorId: 1,
    title: 'Title 5',
    name: 'Bin 5',
    sharedWithUsers: [],
    text: 'This is bin 5',
  },
  {
    id: 4,
    authorId: 1,
    title: 'Title 6',
    name: 'Bin 6',
    sharedWithUsers: [],
    text: 'This is bin 6',
  },
]

export default function PasteBinPage() {
  return (
    <div className="flex justify-center min-h-screen min-w-screen flex-col">
      <h1 className="m-4">This is the bins page</h1>
      <div className="w-full flex flex-row flex-wrap items-center">
        {testBins.map(bin => (
          <React.Fragment key={bin.id.toString()}>
            <PastebinCard bin={bin} />
          </React.Fragment>
        ))}
      </div >
    </div>
  );
}