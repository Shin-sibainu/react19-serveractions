"use server";

export const formAction = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newUser = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
  };
  console.log(newUser);

  //signIn logic here
};

export async function addToCart(prevState, queryData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "Added to cart";
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}
