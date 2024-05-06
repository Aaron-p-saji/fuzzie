"use client";

import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";

type Props = {
  onUpload?: any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);
  LR.registerBlocks(LR);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    ctxProviderRef.current?.addEventListener(
      "file-upload-success",
      handleUpload
    );
  }, []);
  return (
    <div>
      <lr-config ctx-name='my-uploader' pubkey='b46c2b1087d637b3d086' />
      <lr-file-uploader-regular
        ctx-name='my-uploader'
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.1/web/lr-file-uploader-regular.min.css`}
      />
    </div>
  );
};

export default UploadCareButton;
