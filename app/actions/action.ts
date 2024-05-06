"use server";

import { revalidatePath } from "next/cache";

export const formAction = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newUser = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
  };
  console.log(newUser);

  //signIn logic here
};

export async function addToCart(
  prevState?: string | null,
  formData?: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(prevState);

  const itemID = formData?.get("itemID");

  if (itemID === "1") {
    return "Added to cart";
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}

export const submitData = async (message: string) => {
  //実際にサーバー側でメッセージ追加のAPIを叩く
  await new Promise((res) => setTimeout(res, 1500));

  console.log("----send----");
  console.log(message);
};
