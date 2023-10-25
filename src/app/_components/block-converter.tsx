"use client";

import { PortableText } from "@portabletext/react";
import serializers from "../../utils/serializers";
import { IPost } from "../../types/posts";

interface BlockConverterProps {
  postData: IPost;
}

export default function BlockConverter({ postData }: BlockConverterProps) {
  return <PortableText value={postData.body} components={serializers} />;
}
