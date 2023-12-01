"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("60b92ac2-311f-4a6c-abd0-a1f68d124b03");
  }, []);
  return null;
};
