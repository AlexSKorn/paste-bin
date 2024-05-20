import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Bin } from "../app/bins/page"

interface PastebinCardProps {
  bin: Bin;
}

const PastebinCard: React.FC<PastebinCardProps> = ({ bin }) => {
  return (
    <div>
      <Card className="w-[350px] m-4">
        <CardHeader>
          <CardTitle>{bin.name}</CardTitle>
          <CardDescription>{bin.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="pasteContent">Your Pastebin</Label>
          <Textarea id="pasteContent" disabled={true} defaultValue={bin.text.toString()} className="m-4" />
          <Button>Copy</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default PastebinCard