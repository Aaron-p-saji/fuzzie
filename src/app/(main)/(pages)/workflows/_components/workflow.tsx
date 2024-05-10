"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean;
};

const Workflow = ({ name, description, id, publish }: Props) => {
  const [onButton, setOnButton] = useState(false);
  const onPublishFlow = () => {
    setOnButton((prevState) => {
      return prevState === false ? true : false;
    });
  };
  useEffect(() => {}, [onButton]);
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editors/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <div className="">
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Label htmlFor="airplane-mode" className="text-muted-foreground">
          {!onButton ? "Off" : "On"}
        </Label>
        <Switch
          id="airplane-mode"
          onClick={onPublishFlow}
          //   defaultChecked={publish}
        />
      </div>
    </Card>
  );
};

export default Workflow;
