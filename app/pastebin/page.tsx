"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";



export default function PasteBinPage() {
  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState(0)
  const [userText, setUserText] = useState(1);

  const handleSubmit = () => {
    console.log("Submit was clicked")
    console.log(`Message: ${text}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="w-1/4 flex flex-col items-center">
        <h1 className="m-4">PasteBin</h1>
        <h3>Your are logged in as user: {currentUser.toString()}</h3>
        <Label className="m-2" htmlFor="pastebin">Your message</Label>
        <Textarea value={text} onChange={e => setText(e.target.value)} className="m-4" placeholder="Write your message here" id="pastebin" />
        <p className="text-sm text-muted-foreground">
          This is the message you will be able to share.
        </p>
        <Button onClick={handleSubmit} className="m-4"> Submit Pastebin</Button>

        {/* Remove this when you can login, this is acting like a temp login system */}
        <Label className="m-2" htmlFor="tempUserId">Enter User Id</Label>
        <Input onChange={(e) => setUserText(Number(e.target.value))} className="m-2" id="tempUserId" placeholder="Input User Id" />
        <Button onClick={() => setCurrentUser(userText)}>Set User ID</Button>

      </div >
    </div>
  );
}